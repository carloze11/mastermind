const express = require("express");
const router = express.Router();

// GET greeting page
router.get("/", (req, res) => {
    res.send("Greeting page greets you.");
});

// GET game page
router.get("/mastermind", (req, res) => {
    res.send("Mastermind game page");
});

module.exports = router;
