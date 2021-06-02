import React, { Component } from "react";
import Bootstrap from "./images/skills/Bootstrap.png";
import css3 from "./images/skills/css3.png";
import Flask from "./images/skills/Flask.png";
import html from "./images/skills/html.png";
import JavaScript from "./images/skills/JavaScript.png";
import Laravel from "./images/skills/Laravel.png";
import PHP from "./images/skills/PHP.png";
import Python from "./images/skills/Python.png";
import Rct  from "./images/skills/Rct.png";
import SQL from "./images/skills/SQL.png";

class About extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      if (scrollY < 196) {
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
      <div className = "aboutSection">
        <section className="about" id="About">
          <div className ="aboutBox">
            <div className ="aboutHeader">
              <h1
                style={
                  this.state.scrolled
                    ? { opacity: 1, transform: "translateX(0px)" }
                    : { opacity: 0 }
                }
              >
                About Me
              </h1>
              <p               
                style={
                  this.state.scrolled
                    ? { opacity: 1, transform: "translateX(0px)" }
                    : { opacity: 0 }
                }>
                Get to know more about me
              </p>
            </div>
            <div className ="aboutDescription" >
            <p
              style={
                this.state.scrolled
                  ? { opacity: 1, transform: "translateX(0px)" }
                  : { opacity: 0 }
              }
            >
              My name is Ryan Eleazar. I’m a Developer/Engineer with a passion for problem solving and learning. I have a Bachelors Degree in Electronics Engineering and I am aiming to become a developer that can be able to build amazing products using new and cutting edge technologies. I always wanted to be part of a team that can produce products and solutions that can help people and organizations with their problems. 
              <br></br>
              I will love to hear from you, whether it’s a project or a job opportunity, or if you’re just feeling to have a good chat about technology. Feel free to contact me
            </p>
            </div>
          </div>
        </section>
        <section className="skills" >
          <div className ="skillsBox">
            <div className ="skillsHeader">
              <h1
                style={
                  this.state.scrolled
                    ? { opacity: 1, transform: "translateX(0px)" }
                    : { opacity: 0 }
                }>
              Skills
              </h1>
              <p               
                style={
                  this.state.scrolled
                    ? { opacity: 1, transform: "translateX(0px)" }
                    : { opacity: 0 }
                }>
                The languages, frameworks, libraries, and tools I use to create software:
              </p>
            </div>
            
            <div className ="skillsDescription"  style={
                  this.state.scrolled
                    ? { opacity: 1, transform: "translateX(0px)" }
                    : { opacity: 0 }
                }> 
              <h1>Front-End </h1>
              <div className = "skillsLogo" >
                  <img  src={html} alt="logo"/>
                  <img  src={css3} alt="logo"/>
                  <img  src={JavaScript} alt="logo"/>
                  <img  src={Bootstrap} alt="logo"/>
                  <img  src={Rct} alt="logo"/>
                  <h1>Back-End</h1>
                  <img  src={Flask} alt="logo"/>
                  <img  src={Laravel} alt="logo"/>
                  <img  src={PHP} alt="logo"/>
                  <img  src={Python} alt="logo"/>
                  <img  src={SQL} alt="logo"/>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
