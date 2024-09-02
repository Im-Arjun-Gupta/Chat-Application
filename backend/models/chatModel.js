const mongoose = require("mongoose");

const chatModel = new mongoose.Schema({
  chatName: {
    type: String,
    trim: true,
  },
});
