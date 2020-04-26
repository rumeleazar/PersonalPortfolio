import React, { Component } from "react";

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
        <section>
          <h1
            style={
              this.state.load
                ? { opacity: 1, transform: "translateX(0px)" }
                : { opacity: 0 }
            }
          >
            HI, I'M RYAN AND I'M A WEB DEVELOPER
          </h1>
          <a
            href="https://drive.google.com/file/d/19vEmRbJvt27rbMA6l3ncNaJwDgKJ6eA8/view?usp=sharing"
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
      </div>
    );
  }
}

export default Hero;
