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
    if (inventoryType === "in" && user.role !== "donor") {
      throw new Error("Not a Donor Account!");
    }
    if (inventoryType === "out" && user.role !== "hospital") {
      throw new Error("Not a Hospital!");
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
