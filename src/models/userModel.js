
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    index: true,
  },
  contact: {
    type: String,
    required: true,
  },
  
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema, "User");
