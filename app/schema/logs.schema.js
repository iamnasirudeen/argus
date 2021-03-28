const { Schema, model } = require("mongoose");

const logSchema = new Schema(
  {
    request: {
      method: String,
      url: String,
      path: String,
      duration: Number,
      timestamp: Date,
      hostname: String,
      body: Array,
      headers: String,
      ipAddress: String,
      localAddress: String,
      localPort: String,
    },
    response: {
      status: Number,
      body: Array,
    },
  },
  { timestamps: true }
);

exports.Logs = model("Logs", logSchema);
