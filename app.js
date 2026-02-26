const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.MONGO);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(session({
  secret: "rehab",
  resave: false,
  saveUninitialized: false
}));

app.use("/", require("./routes/auth"));
app.use("/game", require("./routes/game"));
app.use("/leaderboard", require("./routes/leaderboard"));

app.listen(3000, () => console.log("Server running"));