const express = require("express");
const app = express();
const logify = require("./app");
const http = require("http");

const server = http.Server(app);
server.listen(5000);

//app.listen(5000, () => console.log("App started"));

logify(app, {
  database: "mongodb://localhost/logify",
  //port: 7000,
  server,
  baseURL: "/logs",
});

app.get("/", (req, res) => res.send("Hello world"));

module.exports = app;
