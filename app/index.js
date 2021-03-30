const { responseTime } = require("./libs/responseTime");
const db = require("./database");
const cors = require("cors");
const { handleServerRequest } = require("./libs/handleServerRequest");
const argusManager = require("./libs/argusManager");

function logify(
  app,
  { database, port, server, baseURL, authentication = false }
) {
  // Initialize database first
  db({ app, database })
    .then(() => {
      handleServerRequest({ port, server, baseURL, authentication }, app);

      const options = {
        database,
        port,
        server,
        baseURL,
        authentication,
      };

      // Save the config details in a manager so we can always get it back wherever we need it
      argusManager.setArgusConfig(options);
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

  app.use(responseTime(baseURL, port));
  app.use(cors());

  // // Use cors in dev mode
  // if (process.env.NODE_ENV === "development") {
  //   app.use(cors());
  // }
}

module.exports = logify;
