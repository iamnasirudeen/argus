const socketioJwt = require("socketio-jwt");
const config = require("config");
const jwtSecretKey = config.get("jwtSecretKey");
const userManager = require("./../userManager");
const { User } = require("../../schema/user.schema");
const moment = require("moment");
const initListeners = require("./listeners");

const events = (io) => {
  io.on(
    "connection",
    socketioJwt.authorize({
      secret: jwtSecretKey,
      timeout: 15000,
      callback: 15000,
    })
  ).on("authenticated", async function (socket) {
    // Get the connected user;
    const user = await User.findByIdAndUpdate(
      socket.decoded_token._id,
      { online: true },
      { new: true }
    );

    if (user) {
      const socketId = socket.id;
      const userId = user._id.toString();

      const userData = {
        _id: userId,
        username: user.email,
      };

      socket.user = userData;
      // Add user to the user manager
      userManager.addUser(userId, socket);
      const time = moment().toISOString();
      console.log(`"${user.email}":"${socketId}":"CONNECTED" at ${time}`);

      //this socket is authenticated, we are good to handle more events from it.
      initListeners(io, socket);
    }
  });

  return io;
};

module.exports = events;
