const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

//ROUTER OBJECT
const router = express.Router();

//**** CREATE ROUTES ****/
//Add inventory || POST
router.post("/create-inventory", authMiddleware);

module.exports = router;
