const userModel = require("../models/userModel");

//DONOR LIST
const getDonorsListController = async (req, res) => {
  try {
    const donorData = await userModel
      .find({ role: "donor" })
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
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
//HOSPITAL LIST
const getHospitalListController = async (req, res) => {
  try {
    const hospitalData = await userModel
      .find({ role: "hospital" })
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      totalCount: hospitalData.length,
      message: "Hospital List Fetched Successfully!",
      hospitalData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Hospital List API!",
      error,
    });
  }
};

//ORGANISATION LIST
const getOrganisationListController = () => {};

//Export
module.exports = { getDonorsListController, getHospitalListController };
