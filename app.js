const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "build", "index.html"))
);

module.exports = app;
