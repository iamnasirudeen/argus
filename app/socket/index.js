const socketIO = require("socket.io");
const events = require("./events");
const chalk = require("chalk");
const userManager = require("./userManager");

const initSocket = (server, baseURL) => {
  const io = socketIO(server, { path: "/argus-websocket-server/" });
  userManager.setIOInstance(io);
  events(io, baseURL);
  console.log(
    `${chalk.green("✓")} ${chalk.bold(
      chalk.gray(`Logger connected to Socket server successfully`)
    )}`
  );
  return io;
};

module.exports = initSocket;
