const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//***** REGISTER CONTROLLER *****/
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
    //Rest Data
    const user = new userModel(req.body);
    await user.save();
    return res.status(201).send({
      success: true,
      message: "User Registered Successfully!",
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Error in Register API!",
      err,
    });
  }
};

//***** REGISTER CONTROLLER *****/
const loginController = async (req, res) => {
  try {
    //Check User
    const user = await userModel.findOne({ email: req.body.email });
    if(!user){
      return res.status(404).send({
        success: false,
        message: "Invalid Credentials!",
      });
    }

    //Compare Password
    const comparePassword = await bcrypt.compare(req.body.password, user.password);
    if(!comparePassword){
      return res.status(500).send({
        success: false,
        message: "Invalid Credentials!"
      });
    }

    //Create Token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);


  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Login API!",
      error,
    });
  }
};

//****** EXPORT *****/
module.exports = { registerController, loginController };
