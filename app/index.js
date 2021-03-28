const { responseTime } = require("./libs/responseTime");
const http = require("http");
const initSocket = require("./socket/index");
const db = require("./database");
const { getIndex, getApiData, getSingleLog } = require("./controller");
const cors = require("cors");
const express = require("express");
const path = require("path");

const expressApp = express();

function logify(app, { database, port = 9900 }) {
  // Initialize database first
  db({ app, database })
    .then(() => {
      const argusServer = http.Server(expressApp);

      if (port && typeof port === "number") {
        argusServer.listen(port);
      }

      // Initialize socket
      initSocket(argusServer);
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

  const adminUrl = "/argus";

  app.use(responseTime(adminUrl));

  // Use cors in dev mode
  if (process.env.NODE_ENV === "development") {
    expressApp.use(cors());
  }

  expressApp.use(adminUrl, express.static(path.join(__dirname, "static")));

  expressApp.get(adminUrl, getIndex);
  expressApp.get(adminUrl + "/api/logs", getApiData);
  expressApp.get(adminUrl + "/api/logs/:logId", getSingleLog);
}

module.exports = logify;
