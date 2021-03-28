const { notifyClient } = require("../socket/events/listeners/notification");
const { getIpAddress } = require("../utils");
const { Logs } = require("../schema/logs.schema");

async function logger(req, res, next, responseTime) {
  const responseBody = res._responseJson || res._responseStr;

  const payload = {
    request: {
      url: req.url,
      path: req.path,
      duration: responseTime,
      timestamp: res.timestamp,
      hostname: req.hostname,
      localAddress: req.connection.localAddress,
      localPort: req.connection.localPort,
      body: req.body ? [req.body] : undefined,
      ipAddress: getIpAddress(req),
      method: req.method,
      headers: req.headers,
    },
    response: {
      status: res.statusCode,
      body: [responseBody],
    },
  };
  const logInfo = await Logs.create(payload);

  console.log(logInfo);

  notifyClient(logInfo);

  return next();
}

module.exports = { logger };
