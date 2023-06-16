const userModel = require("../models/userModel");

const registerController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });

    //VALIDATION
    if(existingUser){
        return
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
