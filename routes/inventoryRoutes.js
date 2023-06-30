const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonorsController,
  getHospitalsController,
} = require("../controller/inventoryController");

//ROUTER OBJECT
const router = express.Router();

//**** CREATE ROUTES ****/
//Add inventory || POST
router.post("/create-inventory", authMiddleware, createInventoryController);

//Get All Blood Records(Inventory Find)
router.get("/get-inventory", authMiddleware, getInventoryController);

//Get Donor Records
router.get("/get-donors", authMiddleware, getDonorsController);

//Get Hospital Data
router.get("/get-hospitals", authMiddleware, getHospitalsController);

//Get Hospital Data
router.get("/get-organisation", authMiddleware);

module.exports = router;
