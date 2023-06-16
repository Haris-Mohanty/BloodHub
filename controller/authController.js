const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const registerController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });

    //VALIDATION
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User Already Exist!",
      });
    }

  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Error in Register API!",
      err,
    });
  }
};

module.exports = { registerController };
