const chalk = require("chalk");
const argusManager = require("../libs/argusManager");

function getIpAddress(req) {
  const xForwardedFor = (req.headers["x-forwarded-for"] || "").replace(
    /:\d+$/,
    ""
  );
  const ip = xForwardedFor || req.connection.remoteAddress;

  return ip;
}

function log(value) {
  function info() {
    console.log(`${chalk.green("✓")} ${chalk.bold(chalk.gray(value))}`);
  }

  function error() {
    console.log(`${chalk.red("X")} ${chalk.bold(chalk.gray(value))}`);
  }

  return { info, error };
}

function compareLoginDetails(formData) {
  const authentcationDetails = argusManager.getConfigValue("authentication");

  if (
    formData.email.trim() === authentcationDetails.email.trim() &&
    formData.password.trim() === authentcationDetails.password.trim()
  )
    return true;
  else return false;
}

exports.getIpAddress = getIpAddress;
exports.log = log;
exports.compareLoginDetails = compareLoginDetails;
