const { responseTime } = require("./libs/responseTime");
const http = require("http");
const initSocket = require("./socket/index");
const db = require("./database");
const { getIndex, getApiData, getSingleLog } = require("./controller");
const cors = require("cors");
const express = require("express");
const path = require("path");

function logify(app, { database, port = 9900 }) {
  // Initialize database first
  db({ app, database })
    .then(() => {
      const server = http.Server(app);

      // Listening on a port is needed so the socket server can know where to pick requests from
      if (port && typeof port === "number") {
        server.listen(port);
      }

      // Initialize socket
      initSocket(server);
    })
    .catch((error) => console.error(error));

  const adminUrl = "/argus";

  app.use(responseTime(adminUrl));

  // Use cors in dev mode
  if (process.env.NODE_ENV === "development") {
    app.use(cors());
  }

  app.use(adminUrl, express.static(path.join(__dirname, "static")));

  app.get(adminUrl + "/", getIndex);
  app.get(adminUrl + "/api/logs", getApiData);
  app.get(adminUrl + "/api/logs/:logId", getSingleLog);
}

module.exports = logify;
