const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  title: {
    type: String,
    maxlength: 100,
  },
  content: {
    type: String,
    maxlength: 1000,
  },
});

const Board = mongoose.model("Board", userSchema);

module.exports = { Board };
