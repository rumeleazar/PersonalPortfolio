import React, { Component } from "react";
import computerPicture from "./images/HTML_Two Color.png";

class Hero extends Component {
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
      <div className="heroimage" id="home">
        <section className ="herotext">
          <h1
            style={
              this.state.load
                ? { opacity: 1, transform: "translateX(0px)" }
                : { opacity: 0 }
            }
          >
            RYAN ELEAZAR
          </h1>
          <p 
          style={
            this.state.load
              ? { opacity: 1, transform: "translateX(0px)" }
              : { opacity: 0 }
          }>
            I’m a Developer/Engineer based in Kowloon, Hong Kong. I have serious passion for problem solving and software development and I am hoping to have a chance to work with you
          </p>
          <a
            href="https://drive.google.com/file/d/1KewUm8CHPeMgpoO8od7ko_vwZAMiKc2n/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="button"
              style={
                this.state.load
                  ? { opacity: 1, transform: "translateX(0px)" }
                  : { opacity: 0 }
              }
            >
              HIRE ME!
            </button>
          </a>
        </section>
        <section className = "herovector">
          <div className = "vectorimage" 
            style={
              this.state.load
                ? { opacity: 1, transform: "translateX(0px)" }
                : { opacity: 0 }
            }
            >
            <img  src={computerPicture} alt="logo"/>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
