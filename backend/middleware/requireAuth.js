const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

//env var
const SECRET = process.env.SECRET;

const requireAuth = async (req, res, next) => {
    // verify authentication
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: "Authorization token required" });
    }

    // split string by Bearer to get token
    const token = authorization.split(" ")[1];

    try {
        const { _id } = jwt.verify(token, SECRET);
        req.user = await User.findOne({ _id }).select("_id");
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ error: "Request is not authorized" });
    }
};

module.exports = requireAuth;
