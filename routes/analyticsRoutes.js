const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  bloodGroupDetailsController,
} = require("../controller/analyticsController");

//Router Object
const router = express.Router();

//**** CREATE ROUTES ****/
//Get Donor Records
router.get("/get-donors", authMiddleware, bloodGroupDetailsController);

module.exports = router;
