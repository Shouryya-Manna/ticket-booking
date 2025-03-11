import React from "react";

function GenerateMovie() {
  return (
    <div className="grid place-content-center">
      <h1 className="text-center text-6xl text-teal-700 m-16">Generate Event</h1>
      <div className="flex flex-col">
        <div>
          Enter Event Name:
        </div>
        <input className="h-10 border-2 border-sky-600 mt-5 mb-10"
        type="text"/>
         <div>
          Enter Event Date:
        </div>
        <input className="h-10 border-2 border-sky-600 mt-5 mb-10"
        type="text"/>
         <div>
          Enter Event Venue:
        </div>
        <input className="h-10 border-2 border-sky-600 mt-5 mb-16"
        type="text"/>

        <button className="h-10 bg-lime-100 border-green-600 border-2">Submit</button>
      </div>
    </div>
  );
}

export default GenerateMovie;
