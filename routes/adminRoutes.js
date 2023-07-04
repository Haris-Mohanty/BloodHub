const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { getDonorsListController } = require("../controller/adminController");

//Router Object
const router = express.Router();

//Routes
//GET DONOR LIST
router.get("/donor-list", authMiddleware, getDonorsListController);

//Export
