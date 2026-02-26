const router = require("express").Router();
const Score = require("../models/Score");

router.get("/", async (req, res) => {
  const scores = await Score.find().sort({ score: -1 }).limit(10);
  res.render("leaderboard", { scores });
});

module.exports = router;