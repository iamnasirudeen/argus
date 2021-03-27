const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: String,
    password: String,
    passwordResetToken: String,
    passwordResetTokenExpires: String,
    online: Boolean,
  },
  { timestamps: true }
);

exports.User = model("User", userSchema);
