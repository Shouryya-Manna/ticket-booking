const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  ticket_id: {
    type: String,
    required: true,
    unique: true,
  },

  event_id: {
    type: mongoose.Schema.Types.ObjectId, // Reference to EVENT model
    ref: "event",
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },
});

const TICKET = mongoose.model("ticket",schema);

module.exports = TICKET;
