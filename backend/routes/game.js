const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();

// game controller functions
const { getHome, getGame } = require("../controllers/gameController");

// require auth for all game routes
router.use(requireAuth);

// GET home page
router.get("/", getHome);

// GET game page
router.get("/mastermind", getGame);

module.exports = router;
