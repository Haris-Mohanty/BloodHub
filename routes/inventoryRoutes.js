const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonorsController,
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

module.exports = router;
