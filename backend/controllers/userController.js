const User = require("../models/userModel");

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

        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { loginUser, signupUser };
