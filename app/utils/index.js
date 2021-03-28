function getIpAddress(req) {
  const xForwardedFor = (req.headers["x-forwarded-for"] || "").replace(
    /:\d+$/,
    ""
  );
  const ip = xForwardedFor || req.connection.remoteAddress;

  return ip;
}

exports.getIpAddress = getIpAddress;
