const { responseTime } = require("./libs/responseTime");
const http = require("http");
const initSocket = require("./socket/index");
const db = require("./database");
const { getIndex, getApiData } = require("./controller");

function logify(app, { database, adminUrl = "/horus" }) {
  // Initialize database first
  db({ app, database })
    .then(() => {
      const server = http.Server(app);
      initSocket(server);
    })
    .catch((error) => console.error(error));

  app.use(responseTime(adminUrl));
  app.get(adminUrl + "/", getIndex);
  app.get(adminUrl + "/api/logs", getApiData);
}

module.exports = logify;
