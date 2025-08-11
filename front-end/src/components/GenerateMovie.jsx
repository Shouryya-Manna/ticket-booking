import React, { useState } from "react";
import { Button } from "./ui/button";
import axios from "axios";
import { Calendar } from "../components/ui/calendar";
import { useMutation } from "@tanstack/react-query";
import { createMovieInfo } from "@/Api/api";

function GenerateMovie() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventVenue, setEventVenue] = useState("");

  const movieMutation = useMutation({
    mutationFn: createMovieInfo,
    onSuccess: () => {
      console.log("Event Created ...");
    },
    onError: (err)=>{
      console.log("Error Creating Event", err);
    }
  });

  function handleEventName(e) {
    setEventName(e.target.value);
  }

  function handleEventDate(e) {
    setEventDate(e.target.value);
  }

  function handleEventVenue(e) {
    setEventVenue(e.target.value);
  }

  function handleSubmit() {
    // axios
    //   .post("http://localhost:8000/events", {
    //     event_name: eventName,
    //     event_date: eventDate,
    //     event_venue: eventVenue,
    //   })
    //   .then((response) => {
    //     console.log("Event Created...", response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error creating event:", error);
    //   });

    movieMutation.mutate({
      event_name: eventName,
      event_date: eventDate,
      event_venue: eventVenue,
    });
  }

  return (
    <div className="grid place-content-center">
      <h1 className="text-center text-6xl text-teal-700 m-16">
        Generate Event
      </h1>
      <div className="flex flex-col">
        <div>Enter Event Name:</div>
        <input
          className="h-10 border-2 border-sky-600 mt-5 mb-10 rounded-lg"
          type="text"
          onChange={handleEventName}
        />
        <div>Enter Event Date:</div>
        <input
          className="h-10 border-2 border-sky-600 mt-5 mb-10 rounded-lg"
          type="text"
          onChange={handleEventDate}
        />
        {/* <Calendar/> */}

        <div>Enter Event Venue:</div>
        <input
          className="h-10 border-2 border-sky-600 mt-5 mb-16 rounded-lg "
          type="text"
          onChange={handleEventVenue}
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

export default GenerateMovie;
