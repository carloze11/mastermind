const express = require("express");
const router = express.Router();

// login route
router.get("/login", (req, res) => {
    res.send("Login page.");
});

// GET game page
router.get("/signup", (req, res) => {
    res.send("Signup page");
});

module.exports = router;
