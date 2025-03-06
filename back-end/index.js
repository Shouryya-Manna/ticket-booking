const express = require("express");

const PORT = 8002;

const { connectDB } = require("./connection");

const app = express;

const urlRouter = require("./routes/ticket");

app.use(express.json());

connectDB("mongodb://localhost:27017/ticket-booking").then(() => {
  console.log("MongoDB connected");
});

app.use("/url", urlRouter);

app.listen(PORT, () => {
  console.log(`Server Started At PORT ${PORT}`);
});
