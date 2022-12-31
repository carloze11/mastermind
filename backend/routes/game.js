const express = require("express");
const router = express.Router();

// game controller functions
const { getHome, getGame } = require("../controllers/gameController");

// GET home page
router.get("/", getHome);

// GET game page
router.get("/mastermind", getGame);

module.exports = router;
