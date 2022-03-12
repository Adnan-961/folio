import React from "react";
import "./index.scss";

import Resume from "./cv.pdf";
import Fade from "react-reveal/Fade";

import ITCards from "./ITCards";
import WebCards from "./WebCards";
export default function Skills() {
  return (
    <>
      <div id="aboutme">
        <div id="about">
          <div className="about-title">
            <h1>
              About <span>Me.</span>
            </h1>
          </div>

          <div id="about-text">
            <Fade bottom>
              <p>
                Building <span>beautiful</span>, <span>customizable</span>, and{" "}
                <span>responsive</span> user experiences is my passion.
              </p>

              <p>
                I enjoy pushing myself to <span>solve problems</span> and
                creating <span>solutions</span> that positively affect people.
              </p>
              <p>
                I'm not just a <span>Web-Developer</span> ! I'm Also an{" "}
                <span>IT-Technician!</span>
              </p>
            </Fade>
            <p id="resume-container">
              <Fade bottom>
                <a href={Resume} target="_blank" id="resume" rel="noreferrer">
                  My Resume
                </a>
              </Fade>
            </p>
          </div>
        </div>
        <div id="skills">
          <div className="about-title">
            <h1>
              My<span>Skills.</span>
            </h1>
          </div>

          <div id="skills-container">
            <div id="web">
              <div id="tech-title">
                <h3>Technologies</h3>
              </div>
              <Fade bottom>
                <div id="tech">
                  <WebCards />
                </div>
              </Fade>
            </div>

            <div id="web">
              <div id="tech-title">
                <h3>IT</h3>
              </div>
              <Fade bottom>
                <div id="tech">
                  <ITCards />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
