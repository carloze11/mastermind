const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// env var
const SECRET = process.env.SECRET;

// jwt token
const createToken = (_id) => {
    return jwt.sign({ _id }, SECRET, { expiresIn: "3d" });
};

// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // use static login method
        const user = await User.login(email, password);

        //create token
        const token = createToken(user._id);

        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// signup user
const signupUser = async (req, res) => {
    // get email and password from params
    const { email, password } = req.body;

    try {
        // create user using model static method
        const user = await User.signup(email, password);

        // create token
        const token = createToken(user._id);

        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// GET user stats
const getStats = async (req, res) => {
    const user_id = req.user._id;
    try {
        const user = await User.findById({ _id: user_id });
        const stats = {
            email: user.email,
            wins: user.wins,
            losses: user.losses,
            joined: user.createdAt,
        };
        res.status(200).json(stats);
    } catch (error) {
        console.error(error);
    }
};

// PUT user stats
const updateStats = async (req, res) => {
    try {
        const user_id = req.user._id;
        let update = {};

        if (req.body.result === "win") {
            update = { $inc: { wins: 1 } };
        } else if (req.body.result === "loss") {
            update = { $inc: { losses: 1 } };
        }

        const user = await User.findByIdAndUpdate({ _id: user_id }, update, {
            returnOriginal: false,
        });
        const stats = {
            email: user.email,
            wins: user.wins,
            losses: user.losses,
            joined: user.createdAt,
        };
        res.status(200).json(stats);
    } catch (error) {
        console.error(error);
    }
};

module.exports = { loginUser, signupUser, getStats, updateStats };
