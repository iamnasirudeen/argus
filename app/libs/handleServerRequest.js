const express = require("express");
const argusExpressServer = express();
const http = require("http");
const initSocket = require("../socket");
const path = require("path");
const {
  getIndex,
  getApiData,
  getSingleLog,
  getAppSettings,
  signIn,
} = require("../controller");
const { log } = require("../utils");

function handleServerRequest(options, app) {
  let { port, server, baseURL, authentication } = options;

  // Handle root URL for baseURL
  baseURL = baseURL.trim();

  if (baseURL === "/") baseURL === "";

  // If port is provided, serve all requests only on the provided port
  if (port && typeof port === "number") {
    const argusServer = http.Server(argusExpressServer);
    argusServer.listen(port, () =>
      log(`Argus server listening on port: ${port}`).info()
    );

    initSocket(argusServer);

    // Register all middlewares
    argusExpressServer.use(
      baseURL + "/",
      express.static(path.join(__dirname, "..", "static"))
    );

    argusExpressServer.get(baseURL + "/", getIndex);
    argusExpressServer.get(baseURL + "/api/logs", getApiData);

    // if authentication details is supplied, register the authentication route
    if (authentication && typeof authentication !== "boolean") {
      argusExpressServer.get(baseURL + "/api/logs/authentication", signIn);
    }

    argusExpressServer.get(baseURL + "/api/logs/config", getAppSettings);
    argusExpressServer.get(baseURL + "/api/logs/:logId", getSingleLog);
  }

  // if port is not provided, run on the deafult express application port
  if (!port) {
    initSocket(server);

    // Register all middlewares
    app.use(
      baseURL + "/",
      express.static(path.join(__dirname, "..", "static"))
    );

    app.get(baseURL + "/", getIndex);
    app.get(baseURL + "/api/logs", getApiData);

    // if authentication details is supplied, register the authentication route
    if (authentication && typeof authentication !== "boolean") {
      app.get(baseURL + "/api/logs/authentication", signIn);
    }

    app.get(baseURL + "/api/logs/config", getAppSettings);
    app.get(baseURL + "/api/logs/:logId", getSingleLog);
  }
}

module.exports = { handleServerRequest };
