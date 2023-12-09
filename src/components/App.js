import React from "react";
import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import image from '../images/demo.png';

function App() {
  return (
    <div>
      <NavBar />
      <Home username="Liza" city="New York" />
      <About image={image} />
      
    </div>
  );
}

export default App;
