const express = require("express");
const { registerController } = require("../controller/authController");

//ROUTER OBJECT
const router = express.Router();

//Routes
router.post("/register", registerController);

//Exports
module.exports = router;
