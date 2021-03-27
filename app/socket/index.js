const socketIO = require("socket.io");
const events = require("./events");
const chalk = require("chalk");
const userManager = require("./userManager");

const initSocket = (server) => {
  const io = socketIO(server);
  userManager.setIOInstance(io);
  events(io);
  console.log(
    `${chalk.green("✓")} ${chalk.bold(
      chalk.gray(`Logger connected to Socket server successfully`)
    )}`
  );
  return io;
};

module.exports = initSocket;
