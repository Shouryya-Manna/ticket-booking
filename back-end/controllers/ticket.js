const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");
const TICKET = require("../models/ticket");
const EVENT = require("../models/event");

async function handleGenerateTicket(req, res) {
  // const objectId = new mongoose.Types.ObjectId(event_id);
  try {
    const ticket_Id = uuidv4();
    const { event_id, user_name, user_age } = req.body;

    // ✅ Ensure event_id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(event_id)) {
      return res.status(400).json({ error: "Invalid event_id format" });
    }

    // ✅ Check if event exists
    const event = await EVENT.findById(event_id);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    // ✅ Create ticket
    const ticket = await TICKET.create({
      ticket_id: ticket_Id,
      event_id: event_id,  // Use event_id directly (no need to create new ObjectId)
      name: user_name,
      age: user_age,
    });

    res.status(201).json({ message: "Ticket created successfully", ticket });

  } catch (err) {
    console.error("Error generating ticket:", err);
    res.status(500).json({ error: err.message });
  }
}


async function handleGetTicket(req, res) {}

module.exports = { handleGenerateTicket, handleGetTicket };
