const User = require("../models/userModel");

// login user
const loginUser = (req, res) => {
    res.send("This is the login page.");
};

// signup user
const signupUser = async (req, res) => {
    // get email and password from params
    const { email, password } = req.body;

    try {
        // create user using model static method
        const user = await User.signup(email, password);

        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { loginUser, signupUser };
