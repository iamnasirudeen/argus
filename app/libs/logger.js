const { notifyClient } = require("../socket/events/listeners/notification");
const { getIpAddress } = require("../utils");

function logger(req, res, next, responseTime) {
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
    },
    response: {
      status: res.statusCode,
      body: [responseBody],
    },
  };

  console.log(payload);

  notifyClient(payload);

  return next();
}

module.exports = { logger };
