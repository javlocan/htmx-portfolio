const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "..", "public")));

// Routes

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home", "index.html"));
});

app.get("/nav/home", (req, res) => {
  res.sendFile(path.join(__dirname, "partials", "nav", "home", "index.html"));
});

app.get("/nav/about", (req, res) => {
  res.sendFile(path.join(__dirname, "partials", "nav", "about", "index.html"));
});

module.exports = app;
