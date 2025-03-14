const express = require("express");

const router = express.Router();

const { handleGenerateEvent, handleGetEvent, handleGetAllEvents } = require("../controllers/event");

router.post("/events", handleGenerateEvent);
router.get("/events", handleGetAllEvents);

module.exports = router;
