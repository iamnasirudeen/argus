const express = require("express");
const app = express();
const logify = require("./app");

app.listen(3000, () => console.log("App started"));

logify({ app, database: "mongodb://localhost/logify" });

app.get("/", (req, res) => res.send("Hello world"));

module.exports = app;
