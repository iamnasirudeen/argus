const express = require("express");
const argusExpressServer = express();
const http = require("http");
const initSocket = require("../socket");
const path = require("path");
const { getIndex, getApiData, getSingleLog } = require("../controller");
const { log } = require("../utils");

function handleServerRequest(options, app) {
  const { port, server, baseURL } = options;

  // If port is provided, serve all requests only on the provided port
  if (port && typeof port === "number") {
    const argusServer = http.Server(argusExpressServer);
    argusServer.listen(port, () =>
      log(`Argus server listening on port: ${port}`).info()
    );

    initSocket(argusServer, baseURL);

    // Register all middlewares
    argusExpressServer.use(
      baseURL,
      express.static(path.join(__dirname, "..", "static"))
    );

    argusExpressServer.get(baseURL, getIndex);
    argusExpressServer.get(baseURL + "/api/logs", getApiData);
    argusExpressServer.get(baseURL + "/api/logs/:logId", getSingleLog);
  }

  // if port is not provided, run on the deafult express application port
  if (!port) {
    initSocket(server, baseURL);

    // Register all middlewares
    app.use(baseURL, express.static(path.join(__dirname, "..", "static")));

    app.get(baseURL, getIndex);
    app.get(baseURL + "/api/logs", getApiData);
    app.get(baseURL + "/api/logs/:logId", getSingleLog);
  }
}

module.exports = { handleServerRequest };
