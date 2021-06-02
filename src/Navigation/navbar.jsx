import React, { Component } from "react";
import "../index.css";
import Links from "./links";
import LogoBlack from "../images/RyanLogoBlack.png";
import { animateScroll as scroll } from "react-scroll";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY;
      if (isTop < 200) {
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

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div>
        <nav
          className={this.state.scrolled ? "navigation scrolled" : "navigation"}
        >
          <div className="logo">
            <img src={LogoBlack} alt="logo" onClick={this.scrollToTop} />
          </div>
          <ul className="navlinks">
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
