const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  ticket_id: {
    type: String,
    required: true,
    unique: true,
  },

  event_id: {
    type: mongoose.Schema.Types.ObjectId, // Correct reference type
    ref: "event", // Reference to EVENT collection
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
