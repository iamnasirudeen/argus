const chalk = require("chalk");

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

exports.getIpAddress = getIpAddress;
exports.log = log;
