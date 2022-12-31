// GET home page
const getHome = (req, res) => {
    res.send("This is the home page.");
};

// GET game page
const getGame = (req, res) => {
    res.send("This is the game page.");
};

module.exports = { getHome, getGame };
