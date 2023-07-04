const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { getDonorsListController } = require("../controller/adminController");
const adminMiddleware = require("../middleware/adminMiddleware");

//Router Object
const router = express.Router();

//Routes
//GET DONOR LIST
router.get("/donor-list", authMiddleware, adminMiddleware, getDonorsListController);

//Export
module.exports = router;
