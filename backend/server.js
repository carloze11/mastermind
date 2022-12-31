const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
    res.send("hello");
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
