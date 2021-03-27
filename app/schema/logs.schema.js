const { Schema, model } = require("mongoose");

const logSchema = new Schema(
  {
    request: {
      method: String,
      path: String,
      duration: Number,
      timestamp: Date,
      host: String,
      body: String,
      headers: String,
      ipAddress: String,
    },
    response: {
      status: Number,
    },
  },
  { timestamps: true }
);

exports.Logs = model("Logs", logSchema);
