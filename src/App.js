import React, { Component } from "react";
import "./index.css";
import Navigation from "./Navigation/navbar.jsx";
import Hero from "./hero.jsx";
import About from "./about.jsx";
import Contact from "./contact";
import Projects from "./Projects/projects.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      load: false,
    };
  }

  componentDidMount() {
    window.addEventListener("load", () => {
      this.setState({ load: true });
    });
  }
  componentWillUnmount() {
    window.removeEventListener("load");
  }

  render() {
    return (
      <div>
        <div
          className="loader"
          style={this.state.load ? { opacity: 0 } : { opacity: 1 }}
        ></div>
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
