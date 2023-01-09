const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        wins: {
            type: Number,
            default: 0,
        },
        losses: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

// static signup method for user
userSchema.statics.signup = async function (email, password, confirmPassword) {
    //validation
    if (!email || !password || !confirmPassword) {
        throw Error("All fields must be filled.");
    }
    if (!validator.isEmail(email)) {
        throw Error("Please provide a valid email address.");
    }
    if (!validator.isLength(password, { min: 6 })) {
        throw Error("Password must be at least 6 characters long.");
    }
    if (password !== confirmPassword) {
        throw Error("Passwords do not match.");
    }

    const exists = await this.findOne({ email });

    if (exists) {
        throw Error("Email already in use");
    }

    // salting
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    //store password in db
    const user = await this.create({ email, password: hash });

    return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
    // validation
    if (!email || !password) {
        throw Error("All fields must be filled.");
    }

    const user = await this.findOne({ email });

    if (!user) {
        throw Error("Email does not exist.");
    }

    // compare entered password to bcrypt
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw Error("Incorrect password.");
    }
    return user;
};

module.exports = mongoose.model("User", userSchema);
