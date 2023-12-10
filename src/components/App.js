import React from "react";
import Home from './Home';
import NavBar from './NavBar';
import About from './About';
// import {username,city,image} from '../data/user.js';

function App() {

  // const username = username;
  // const city = city;
  // const image = image;
  return (
    <div>
      <NavBar />
      <Home  />
      <About />
      
    </div>
  );
}

export default App;
