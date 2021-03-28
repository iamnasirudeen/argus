const { logger } = require("./logger");
const { getResponseBody } = require("./response");

function responseTime(adminUrl) {
  return function (req, res, next) {
    // Dont record any request coming to the logger directly
    //if (req.url.includes(adminUrl)) return next();
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
