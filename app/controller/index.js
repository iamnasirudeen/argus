const path = require("path");
const { Logs } = require("../schema/logs.schema");

function getIndex(req, res) {
  return res.sendFile(path.join(__dirname, "..", "static", "index.html"));
}

async function getApiData(req, res) {
  let data = await Logs.find().sort({ createdAt: -1 });

  data = data.map((data) => {
    const { request, response } = data;
    return {
      logId: data._id,
      method: request.method,
      path: request.path,
      status: response.status,
      duration: request.duration,
      timestamp: request.timestamp,
    };
  });

  res.send({ data });
}

async function getSingleLog(req, res) {
  const { logId } = req.params;

  const data = await Logs.findById(logId);

  res.send({ data });
}

module.exports = { getIndex, getApiData, getSingleLog };
