const argusManager = require("../../../libs/argusManager");

const notifyClient = (payload) => {
  const io = argusManager.getIOInstance();
  io.to("argus::notifications").emit("new_request", payload);
};

module.exports = { notifyClient };
