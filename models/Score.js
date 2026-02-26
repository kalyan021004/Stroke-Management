const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  user: String,
  game: String,
  score: Number
});

module.exports = mongoose.model("Score", scoreSchema);