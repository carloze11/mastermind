const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

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
userSchema.statics.signup = async function (email, password) {
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

module.exports = mongoose.model("User", userSchema);
