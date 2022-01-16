require("dotenv").config();

const {REVEALED_URI, NOTREVEALED_URI} = process.env;

module.exports = [
    "eq keys",
    "KEYS",
    REVEALED_URI,
    NOTREVEALED_URI,
  ];