const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => res.render("login"));

router.get("/register", (req, res) => res.render("register"));

router.post("/register", async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10);

  await User.create({
    ...req.body,
    password: hash
  });

  res.redirect("/");
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.send("No user");

  const ok = await bcrypt.compare(req.body.password, user.password);

  if (!ok) return res.send("Wrong");

  req.session.user = user;
  res.redirect("/game");
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;