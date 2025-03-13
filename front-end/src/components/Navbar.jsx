import React from "react";
import { Link } from "react-router";
function Navbar() {
  return (
    <>
      <div className="text-center text-6xl text-teal-700 m-16">Book Your Seat</div>
      <nav className="flex gap-10 list-none text-xl justify-center">
        <Link to="/"><li>Home</li></Link>
        <Link to="/Movies"><li>Events</li></Link>
        <Link to="/Ticket"><li>Ticket</li></Link>
      </nav>
    </>
  );
}

export default Navbar;
