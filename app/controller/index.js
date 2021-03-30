const path = require("path");
const { Logs } = require("../schema/logs.schema");
const argusManager = require("../libs/argusManager");
const { compareLoginDetails } = require("../utils");

function getIndex(req, res) {
  return res.sendFile(path.join(__dirname, "..", "static", "index.html"));
}

async function getApiData(req, res) {
  const logsPerPage = parseInt(req.query.perPage) || 10;
  const page = req.query.page || 1;

  let data = await Logs.find({}, { request: 1, response: 1 })
    .sort({
      createdAt: -1,
    })
    .skip(logsPerPage * page - logsPerPage)
    .limit(logsPerPage);

  const totalLogs = await Logs.estimatedDocumentCount();

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

  res.send({
    data,
    record: {
      current: page,
      pages: Math.ceil(totalLogs / logsPerPage),
      total: totalLogs,
    },
  });
}

async function getSingleLog(req, res) {
  const { logId } = req.params;

  const data = await Logs.findById(logId);

  res.send({ data });
}

async function signIn(req, res) {
  const status = compareLoginDetails(req.body);

  if (status) return res.send({ status: 200, message: "success" });
  else return res.send({ status: 400, message: "Invalid login credentials" });
}

async function getAppSettings(req, res) {
  const authentcation = argusManager.getConfigValue("authentication");

  if (typeof authentcation === "boolean" && authentcation === false)
    return res.send({ authentication: false });
  else {
    return res.send({ authentication: true });
  }
}

module.exports = { getIndex, getApiData, getSingleLog, signIn, getAppSettings };
