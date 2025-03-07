const express = require("express");

const router = express.Router();

const { handleGenerateEvent, handleGetEvent } = require("../controllers/event");

router.post("/events", handleGenerateEvent);
router.get("/events", handleGetEvent);

module.exports = router;
