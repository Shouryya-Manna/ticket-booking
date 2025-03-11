import React from "react";
import { Link } from "react-router";
function Home() {
  return (
    <>
      <div>Home</div>
      <nav>
        <Link to="/"><li>Home</li></Link>
        <Link to="/Movies"><li>movies</li></Link>
      </nav>
    </>
  );
}

export default Home;
