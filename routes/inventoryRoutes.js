const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
} = require("../controller/inventoryController");

//ROUTER OBJECT
const router = express.Router();

//**** CREATE ROUTES ****/
//Add inventory || POST
router.post("/create-inventory", authMiddleware, createInventoryController);

//Get All Blood Records(Inventory Find)
router.get("/get-inventory", authMiddleware, getInventoryController);

module.exports = router;
