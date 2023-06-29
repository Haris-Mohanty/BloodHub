const mongoose = require("mongoose");
const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");

//********* CREATE INVENTORY *******/
const createInventoryController = async (req, res) => {
  try {
    const { email, inventoryType } = req.body;
    //Validation
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("User not Found!");
    }
    //Check inventoryType
    // if (inventoryType === "in" && user.role !== "donor") {
    //   throw new Error("Not a Donor Account!");
    // }
    // if (inventoryType === "out" && user.role !== "hospital") {
    //   throw new Error("Not a Hospital!");
    // }

    //
    if (req.body.inventoryType == "out") {
      const requestedBloodGroup = req.body.bloodGroup;
      const requestedQuantityOfBlood = req.body.quantity;
      const organisation = new mongoose.Types.ObjectId(req.body.userId);
      //Calculate Blood Quantity
      const totalInOfRequestedBlood = await inventoryModel.aggregate([
        {
          $match: {
            organisation,
            inventoryType: "in",
            bloodGroup: requestedBloodGroup,
          },
        },
        {
          $group: {
            _id: "$bloodGroup",
            total: { $sum: "$quantity" },
          },
        },
      ]);
      // console.log("Total in: ", totalInOfRequestedBlood);
      const totalIn = totalInOfRequestedBlood[0]?.total || 0;

      //Calculate OUT Blood Quantity
      const totalOutOfRequestedBlood = await inventoryModel.aggregate([
        {
          $match: {
            organisation,
            inventoryType: "out",
            bloodGroup: requestedBloodGroup,
          },
        },
        {
          $group: { _id: "$bloodGroup", total: { $sum: "$quantity" } },
        },
      ]);
      // console.log("Total out: ", totalOutOfRequestedBlood);
      const totalOut = totalOutOfRequestedBlood[0]?.total || 0;

      //Calculate of in & out
      const availableQuantityOfBolldGroup = totalIn - totalOut;

      //Quantity Validation
      if (availableQuantityOfBolldGroup < requestedQuantityOfBlood) {
        return res.status(500).send({
          success: false,
          message: `Only ${availableQuantityOfBolldGroup}ml of ${requestedBloodGroup.toUpperCase()} is available!`,
        });
      }
      req.body.hospital = user?._id;
    }

    //Save inventory
    const inventory = new inventoryModel(req.body);
    await inventory.save();
    //Response
    return res.status(201).send({
      success: true,
      message: "New Blood Record Added!",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "Error in Create Inventory API!",
      err,
    });
  }
};

//******* GET INVENTORY RECORDS(BLOOD RECORD) *******/
const getInventoryController = async (req, res) => {
  try {
    const inventory = await inventoryModel
      .find({
        organization: req.body._id,
      })
      .populate("donor")
      .populate("hospital")
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      message: "Get all Records Successfully",
      inventory,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "Error in Get All Inventory",
      err,
    });
  }
};

//****** EXPORT *****/
module.exports = { createInventoryController, getInventoryController };
