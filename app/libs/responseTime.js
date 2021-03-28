const { logger } = require("./logger");
const { getResponseBody } = require("./response");

function responseTime(baseURL, port) {
  return function (req, res, next) {
    // Dont record any request coming to the logger directly

    if (port) {
      if (req.url.includes(baseURL) && req.connection.localPort === port)
        return next();
    } else {
      if (req.url.includes(baseURL)) return next();
    }

    const startHrTime = process.hrtime();

    getResponseBody(req, res, next);

    res.on("finish", () => {
      const elapsedHrTime = process.hrtime(startHrTime);
      const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
      logger(req, res, next, elapsedTimeInMs.toString().concat(" ms"));
    });

    return next();
  };
}

module.exports = { responseTime };
