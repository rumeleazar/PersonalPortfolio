import React, { Component } from "react";
import "../index.css";
import Links from "./links";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY;
      if (isTop < 100) {
        this.setState({ scrolled: false });
      } else {
        this.setState({ scrolled: true });
      }
    });

    console.log(this.state.hovered);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  render() {
    return (
      <div>
        <nav
          className={this.state.scrolled ? "navigation scrolled" : "navigation"}
        >
          <div className="logo">
            <h1>Ryan Eleazar</h1>
          </div>
          <ul className="navlinks">
            <Links link="home" name="Home" />
            <Links link="About" name="About" />
            <Links link="Projects" name="Projects" />
            <Links link="Contact" name="Contact" />
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
