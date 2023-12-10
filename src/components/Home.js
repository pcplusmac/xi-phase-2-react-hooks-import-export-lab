import React from "react";
import { username, city } from '../data/user.js';

function Home() {
  return (
    <div id="home">
      <h1 style={{ color: "red" }}>
        {/* {props.username} is a Web Developer from {props.city} */}
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
