const { responseTime } = require("./libs/responseTime");
const http = require("http");
const initSocket = require("./socket/index");
const db = require("./database");
const path = require("path");

function logify(app, { database }) {
  // Initialize database first
  db({ app, database })
    .then(() => {
      const server = http.Server(app);
      initSocket(server);
    })
    .catch((error) => console.error(error));

  app.use(responseTime);
  app.all("/horus", (req, res) =>
    res.sendFile(path.join(__dirname, "static", "index.html"))
  );
}

module.exports = logify;
