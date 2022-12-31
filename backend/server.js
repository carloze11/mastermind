const express = require("express");
const mongoose = require("mongoose");

// environment variables
require("dotenv").config();
const PORT = process.env.PORT;
const DB = process.env.MONGO_URI;

const app = express();

// Routes
const gameRoutes = require("./routes/game");
const userRoutes = require("./routes/user");

app.use("/", gameRoutes);
app.use("/user", userRoutes);

// connect to db
mongoose
    .set("strictQuery", false)
    .connect(DB)
    .then(() => {
        app.listen(PORT, () => {
            console.log(
                `Server is listening on port ${PORT} and connected to the database.`
            );
        });
    })
    .catch((error) => {
        console.log(error);
    });
