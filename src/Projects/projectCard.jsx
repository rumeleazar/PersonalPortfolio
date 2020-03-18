import React, { useState } from "react";

function Card(props) {
  const [mouseOverValue, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div
      className="projectCards"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{
        background: mouseOverValue ? " rgba(0, 0, 0, 0.3)" : " rgba(0, 0, 0, 0)"
      }}
    >
      <img
        src={props.img}
        alt="logo"
        style={{
          filter: mouseOverValue ? "brightness(70%)" : "brightness(100%)"
        }}
      ></img>
      <h3>{props.projectName}</h3>
      <div className="projectDescription">
        <p>{props.description}</p>
        <div
          className="buttonsCont"
          style={{ display: mouseOverValue ? "block" : "none" }}
        >
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <input
              type="button"
              value="Repository"
              className="buttonLinks button1"
            ></input>
          </a>
          <a href={props.site} target="_blank" rel="noopener noreferrer">
            <input
              type="button"
              value="View site"
              className="buttonLinks button2"
            ></input>
          </a>
        </div>
      </div>
    </div>
  );
}

function createCard(proj) {
  return (
    <Card
      key={proj.id}
      projectName={proj.projectName}
      img={proj.imageURL}
      description={proj.projectDescription}
      github={proj.github}
      site={proj.site}
    />
  );
}

export default Card;
export { createCard };
