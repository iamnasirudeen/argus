const socketIO = require("socket.io");
const events = require("./events");
const argusManager = require("../libs/argusManager");
const { log } = require("../utils");

const initSocket = (server) => {
  const io = socketIO(server, { path: "/argus-websocket-server/" });
  argusManager.setIOInstance(io);
  events(io);
  log("Argus connected to Socket server successfully").info();
  return io;
};

module.exports = initSocket;
