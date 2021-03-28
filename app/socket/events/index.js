const events = (io) => {
  io.of("/argus").on("connection", (socket) => {
    // Join all socket to a default room
    socket.join("argus::notifications");
  });
  return io;
};

module.exports = events;
