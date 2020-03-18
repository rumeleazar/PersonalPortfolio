import React from "react";
import ProjectList from "./projects.js";
import { createCard } from "./projectCard.jsx";

function Projects(props) {
  return (
    <div>
      <section className="projects" id="Projects">
        <div className="projectHeader">
          <h1>My Projects</h1>
        </div>
        <div className="projectShowcase">{ProjectList.map(createCard)}</div>
      </section>
    </div>
  );
}

export default Projects;
