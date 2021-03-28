const { responseTime } = require("./libs/responseTime");
const db = require("./database");
const cors = require("cors");
const { handleServerRequest } = require("./libs/handleServerRequest");

function logify(app, { database, port, server, baseURL }) {
  // Initialize database first
  db({ app, database })
    .then(() => {
      handleServerRequest({ port, server, baseURL: "/argus" }, app);
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

  app.use(responseTime("/argus"));

  // // Use cors in dev mode
  // if (process.env.NODE_ENV === "development") {
  //   expressApp.use(cors());
  // }
}

module.exports = logify;
