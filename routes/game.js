const router = require("express").Router();
const Score = require("../models/Score");

router.get("/", (req, res) => {
  if (!req.session.user) return res.redirect("/");
  res.render("dashboard");
});

router.get("/play/:game", (req, res) => {
  res.render("game", { game: req.params.game });
});

router.post("/score", async (req, res) => {
  await Score.create({
    user: req.session.user.name,
    game: req.body.game,
    score: req.body.score
  });

  res.redirect("/leaderboard");
});

module.exports = router;