import React from "react";
import "./index.scss";
import Fade from "react-reveal/Fade";

export default function Navbar() {
  return (
    <div id="navbar">
      <Fade right>
        <ul>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#skills">
            {" "}
            <li>Skills</li>
          </a>
          <a href="#projects">
            {" "}
            <li>Projects</li>
          </a>
          <a href="#contact-container">
            {" "}
            <li>Contact</li>
          </a>
        </ul>
      </Fade>
    </div>
  );
}
