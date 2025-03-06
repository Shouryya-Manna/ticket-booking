const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  event_id: {
    type: String,
    required: true,
    unique: true,
  },

  event_name: {
    type: String,
    required: true,
  },

  event_date: {
    date: Date,
  },

  event_venue: {
    type: String,
  },
});

const URL = mongoose.model("url", schema);

modules.exports = URL;
