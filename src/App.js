import React from "react";
import "./index.css";
import Navigation from "./Navigation/navbar.jsx";
import Hero from "./hero.jsx";
import About from "./about.jsx";
import Contact from "./contact";
import Projects from "./Projects/projects.jsx";

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
