const { User } = require("../../../schema/user.schema");
const userManager = require("./../../userManager");

const disconnectListener = (io, _client) => {
  _client.on("disconnect", async () => {
    const clientUserId = _client.user._id;
    await User.findByIdAndUpdate(
      clientUserId,
      { online: false },
      { new: true }
    );

    // Remove the user from the manager
    userManager.removeUser(clientUserId);
  });
};

module.exports = disconnectListener;
