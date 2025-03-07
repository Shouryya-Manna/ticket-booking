const { v4: uuidv4 } = require("uuid");
const EVENT = require("../models/event");


async function handleGenerateEvent(req, res) {
  const eventId = uuidv4();
  console.log(eventId);
  const body = req.body;
  await EVENT.create({
    event_id: eventId,
    event_name: body.event_name,
    event_date: body.event_date,
    event_venue: body.event_venue,
  });

  res.json({ eventId });
}


async function handleGetEvent(req, res) {
  const event = await EVENT.findById(req.params.id);
  if(!event) res.json(404).json({msg:"Event not found"});
  return res.json(event);
}

module.exports = { handleGenerateEvent, handleGetEvent };
