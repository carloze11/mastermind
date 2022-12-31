const express = require("express");
const router = express.Router();

// user controller functions
const { loginUser, signupUser } = require("../controllers/userController");

// login page
router.post("/login", loginUser);

// sign up page
router.post("/signup", signupUser);

module.exports = router;
