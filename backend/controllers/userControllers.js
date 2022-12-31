// login user
const loginUser = (req, res) => {
    res.send("This is the login page.");
};

const signupUser = (req, res) => {
    res.send("this is sign up page");
};

module.exports = { loginUser, signupUser };
