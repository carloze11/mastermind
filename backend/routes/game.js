const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();

// game controller functions
const { getHome, getGame } = require("../controllers/gameController");

// GET home page
router.get("/", getHome);

// GET game page
router.get("/mastermind", requireAuth, getGame);

module.exports = router;
