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
        <div className={this.state.load ? "unload" : "loader"}>
          <h2>Loading....</h2>
        </div>
        <div
          className="document"
          style={
            this.state.load
              ? { opacity: 1, backgroundColor: "white" }
              : { opacity: 0, backgroundColor: "transparent" }
          }
        >
          <Navigation />
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
