const express = require("express");
const path = require("path");
const fs = require("fs");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

// --------------- Server set up ---------------

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "..", "public")));

app.set("view engine", "html"); // Set the view engine to HTML
app.engine("html", require("ejs").renderFile);

app.set("views", path.join(__dirname, "views"));

// ------------------ ROUTES ---------------------

// --------- View folder routing = Next 13 ---------

const viewsDir = path.join(__dirname, "views");
const viewFiles = fs.readdirSync(viewsDir);

viewFiles.forEach((file) => {
  const routePath =
    "/" +
    (path.basename(file, path.extname(file)) !== "index"
      ? path.basename(file, path.extname(file))
      : "");

  console.log(routePath);
  app.get(routePath, (req, res) => {
    res.render(file);
  });
});

// --------- Partials folder routing  ---------

const partialsRouter = require("./partials");

app.use("/partials", partialsRouter);

module.exports = app;
