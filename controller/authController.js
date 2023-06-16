const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const registerController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });

    //**** VALIDATION ****/
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User Already Exist!",
      });
    }
    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
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
