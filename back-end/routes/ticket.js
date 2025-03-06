const express = require("express");

const router = express.Router();

const { handleGenerateTicket, handleFindTicket } = require();

router.post("/", handleGenerateTicket);
router.get("/", handleFindTicket);

module.exports(router);
