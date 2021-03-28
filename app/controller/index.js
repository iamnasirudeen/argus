const path = require("path");
const { Logs } = require("../schema/logs.schema");

function getIndex(req, res) {
  return res.sendFile(path.join(__dirname, "..", "static", "index.html"));
}

async function getApiData(req, res) {
  const data = await Logs.find().sort({ createdAt: -1 });
  res.send({ data });
}

module.exports = { getIndex, getApiData };
