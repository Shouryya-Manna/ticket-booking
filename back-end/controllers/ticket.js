const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");
const TICKET = require("../models/ticket");

async function handleGenerateTicket(req, res) {
  const ticket_Id = uuidv4();
  const objectId = new mongoose.Types.ObjectId(event_id);
  const body = req.body;
  await TICKET.create({
    ticket_id: ticket_Id,
    event_id: objectId,
    name: body.user_name,
    age: body.user_age
  });
}

async function handleGetTicket(req,res){
    
}

module.exports = { handleGenerateTicket, handleGetTicket };
