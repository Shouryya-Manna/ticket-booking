import React from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import axios from "axios";
function GenerateTicket() {
  const [event, setEvent] = useState("");
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  function handleEventName(e) {
    setEvent(e.target.value);
  }
  function handleUserName(e) {
    setUserName(e.target.value);
  }
  function handleUserAge(e) {
    setUserAge(e.target.value);
  }
  function handleSubmit() {
    axios
      .post("http://localhost:8000/ticket", {
        event: event,
        name: userName,
        age: userAge,
      })
      .then((res) => {
        console.log("Ticket created...", res.data);
      })
      .catch((err) => {
        console.log("Error creating ticket", err);
      });
  }

  return (
    <div className="grid place-content-center">
      <h1 className="text-center text-6xl text-teal-700 m-16">
        Generate Ticket
      </h1>
      <div className="flex flex-col">
        <div>Enter Event Name:</div>
        <input
          className="h-10 border-2 border-sky-600 mt-5 mb-10 rounded-lg"
          type="text"
          onChange={handleEventName}
        />
        <div>Enter Your Name:</div>
        <input
          className="h-10 border-2 border-sky-600 mt-5 mb-10 rounded-lg"
          type="text"
          onChange={handleUserName}
        />
        <div>Enter Your Age:</div>
        <input
          className="h-10 border-2 border-sky-600 mt-5 mb-16 rounded-lg "
          type="text"
          onChange={handleUserAge}
        />
      </div>
      <Button
        className="h-10 bg-lime-100 border-green-600 border-2 text-black hover:bg-lime-300 rounded-lg"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
}

export default GenerateTicket;
