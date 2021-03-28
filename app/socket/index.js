const socketIO = require("socket.io");
const events = require("./events");
const userManager = require("./userManager");
const { log } = require("../utils");

const initSocket = (server, baseURL) => {
  const io = socketIO(server, { path: "/argus-websocket-server/" });
  userManager.setIOInstance(io);
  events(io, baseURL);
  log("Argus connected to Socket server successfully").info();
  return io;
};

module.exports = initSocket;
