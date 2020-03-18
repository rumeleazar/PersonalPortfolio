import React, { Component } from "react";
import ProjectList from "./projects.js";
import { createCard } from "./projectCard.jsx";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      if (scrollY < 800) {
        this.setState({ scrolled: false });
      } else {
        this.setState({ scrolled: true });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  render() {
    return (
      <div>
        <section className="projects" id="Projects">
          <div className="projectHeader">
            <h1
              style={
                this.state.scrolled
                  ? { opacity: 1, transform: "translateX(0px)" }
                  : { opacity: 0 }
              }
            >
              My Projects
            </h1>
          </div>
          <div
            className="projectShowcase"
            style={
              this.state.scrolled
                ? { opacity: 1, transform: "translateX(0px)" }
                : { opacity: 0 }
            }
          >
            {ProjectList.map(createCard)}
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
