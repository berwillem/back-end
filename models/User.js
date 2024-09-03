const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 20,
  },
  age: {
    type: Number,
    min: 16,
    max: 100,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
