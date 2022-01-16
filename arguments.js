require("dotenv").config();

const {UNREVEALED_URI, REVEALED_URI} = process.env;

module.exports = [
    "eq keys",
    "KEYS",
    REVEALED_URI,
    UNREVEALED_URI,
  ];