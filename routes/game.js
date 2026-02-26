const router = require("express").Router();
const Score = require("../models/Score");

router.get("/", (req, res) => {
  res.render("dashboard");
});

router.get("/play/:game", (req, res) => {
  res.render("game", { game: req.params.game });
});



module.exports = router;