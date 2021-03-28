function getResponseBody(req, res, next) {
  const oldWrite = res.write;
  const oldEnd = res.end;
  const oldJson = res.json;
  const chunks = [];

  res.write = function (chunk) {
    chunks.push(Buffer.from(chunk));
    oldWrite.apply(res, arguments);
  };

  res.json = function (bodyJson) {
    res._responseJson = bodyJson;
    oldJson.apply(res, arguments);
  };

  res.end = function (chunk) {
    res.timestamp = new Date();
    if (chunk) chunks.push(Buffer.from(chunk));

    res._responseStr = Buffer.concat(chunks).toString("utf8");

    oldEnd.apply(res, arguments);
  };
}

module.exports = { getResponseBody };
