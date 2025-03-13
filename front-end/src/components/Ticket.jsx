import React from 'react'
import { Button } from './ui/button'
function Ticket() {
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
            />
            <div>Enter Your Name:</div>
            <input
              className="h-10 border-2 border-sky-600 mt-5 mb-10 rounded-lg"
              type="text"
            />
            <div>Enter Your Age:</div>
            <input
              className="h-10 border-2 border-sky-600 mt-5 mb-16 rounded-lg "
              type="text"
            />
          </div>
          <Button className="h-10 bg-lime-100 border-green-600 border-2 text-black hover:bg-lime-300 rounded-lg">
            Submit
          </Button>
        </div>
  )
}

export default Ticket