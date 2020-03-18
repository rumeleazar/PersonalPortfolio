import React from "react";
import { Link } from "react-scroll";

function Links(props) {
  return (
    <li>
      <Link
        activeClass="active"
        to={props.link}
        spy={true}
        smooth={true}
        offset={0}
        duration={1400}
      >
        {props.name}
      </Link>
    </li>
  );
}

export default Links;
