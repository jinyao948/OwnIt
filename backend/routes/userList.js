
   
const express = require("express");
const router = express.Router();
const {getUserByUserId_get,getAllUsers_get} = require("../controllers/userController");


router.get("/all/:limit",getAllUsers_get);
router.get("/user/:id", getUserByUserId_get);
router.get("/user/:email",getUserEmail_get);

module.exports = router;