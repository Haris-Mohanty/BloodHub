const userModel = require("../models/userModel");

const getDonorsListController = async (req, res) => {
  try {
    const donorData = await userModel
      .find({ role: "donor" })
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: false,
      totalCount: donorData.length,
      message: "Donor List Fetched Successfully!",
      donorData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Donor List API!",
      error,
    });
  }
};

//Export
module.exports = { getDonorsListController };
