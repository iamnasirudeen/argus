const express = require("express");
const app = express();
const logify = require("./app");

app.listen(5000, () => console.log("App started"));

logify(app, {
  database: "mongodb://localhost/logify",
  port: 7000,
});

app.get("/", (req, res) => res.send("Hello world"));

module.exports = app;
