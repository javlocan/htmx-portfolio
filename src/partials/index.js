const path = require("path");
const partials = require("express").Router();

partials.get("/", function (req, res, next) {});

// A route to handle requests to any individual album, identified by an album id
partials.get("/nav", function (req, res, next) {
  let component = req.query.c;
  res.sendFile(path.join(__dirname, "nav", component, "index.html"));
});

//...

module.exports = partials;
