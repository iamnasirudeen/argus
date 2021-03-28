const { logger } = require("./logger");
const { getResponseBody } = require("./response");

function responseTime(req, res, next) {
  const startHrTime = process.hrtime();

  getResponseBody(req, res, next);

  res.on("finish", (data) => {
    const elapsedHrTime = process.hrtime(startHrTime);
    const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
    logger(req, res, next, elapsedTimeInMs.toString().concat("ms"));
  });

  return next();
}

module.exports = { responseTime };
