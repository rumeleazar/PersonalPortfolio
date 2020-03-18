import React, { Component } from "react";

class About extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false
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
      <div>
        <section className="about" id="About">
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
            }
          >
            Hi, I'm <strong>Ryan Ulysses Eleazar</strong>, an aspiring web
            developer based on Tsim Sha Tsui, Hong Kong. I am a fresh graduate
            having a bachelor of science degree in Electronics Engineering with
            passion in learning software development. I am knowledgeable in{" "}
            <strong>
              HTML5, CSS3, JavaScript, jQuery, Python, Flask, and some knowledge
              using Flutter.
            </strong>{" "}
            I am currently studying <strong>ReactJS </strong> to have a firm
            grasp of front-end development. My goal is to become a full stack
            developer with the MERN stack and be able to develop fully
            functional and beautiful web apps that will provide satisfaction to
            its users.
          </p>
        </section>
      </div>
    );
  }
}

export default About;
