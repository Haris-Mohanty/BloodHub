const express = require("express");
const { registerController } = require("../controller/authController");

//ROUTER OBJECT
const router = express.Router();

//**** CREATE ROUTES ****/
//Register || POST
router.post("/register", registerController);
//Login || POST
router.post("/login",)

//Exports
module.exports = router;
