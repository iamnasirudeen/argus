const { logger } = require("./libs/logger");
const http = require("http");
const initSocket = require("./socket/index");
const db = require("./database");

const middlewares = [logger];

function logify({ app, database }) {
  // Initialize database first
  db({ app, database })
    .then(() => {
      // Register middlewares
      middlewares.map((middleware) => app.use(middleware));

      console.log(app);

      const server = http.Server(app);

      initSocket(server);
    })
    .catch((error) => console.error(error));
}

module.exports = logify;
