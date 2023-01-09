const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();

// user controller functions
const {
    loginUser,
    signupUser,
    getStats,
    updateStats,
    deleteUser,
} = require("../controllers/userController");

// login page
router.post("/login", loginUser);

// sign up page
router.post("/signup", signupUser);

// GET user stats
router.get("/stats", requireAuth, getStats);

// UPDATE user stats
router.post("/update-stats", requireAuth, updateStats);

// DELETE USER
router.delete("/delete-user", requireAuth, deleteUser);

module.exports = router;
