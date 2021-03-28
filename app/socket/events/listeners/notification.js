const userManager = require("../../userManager");

const notifyClient = (payload) => {
  const io = userManager.getIOInstance();
  io.to("argus::notifications").emit("new_request", payload);
};

module.exports = { notifyClient };
