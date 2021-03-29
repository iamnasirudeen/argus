const express = require("express");
const app = express();
const Logify = require("./app");
const http = require("http");

const server = http.Server(app);
server.listen(5000);

Logify(app, {
  database: "mongodb://localhost/horus",
  server,
  baseURL: "/logs",
  //   authentication: {
  //     email: "iamnasirudeen@gmail.com",
  //     password: "naskko@16",
  //   },
});

app.get("/", (req, res) => res.send("Hello world"));

module.exports = app;
