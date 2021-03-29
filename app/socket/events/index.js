const events = (io) => {
  io.on("connection", (socket) => {
    // Join all socket to a default room
    socket.join("argus::notifications");
  });
  return io;
};

module.exports = events;
