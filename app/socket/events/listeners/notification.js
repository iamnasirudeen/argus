const userManager = require("../../userManager");

const notifyClient = (payload) => {
  const io = userManager.getIOInstance();
  io.to("notifications").emit("new_request", payload);
};

module.exports = { notifyClient };
