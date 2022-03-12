import React from "react";
import Fade from "react-reveal/Fade";
import { FiLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import usdt from "./usdt.JPG";
import imdb from "./imdb.JPG";
import folio from "./folio.JPG";
const Projects = () => {
  return (
    <div id="projects">
      <div className="projects__section--wrapper">
        <h2 className="projects__section--title">
          Here Are Some Of My <span>Projects.</span>
        </h2>
        <ul className="project__list">
          <Fade bottom>
            <li className="project">
              <div className="project__wrapper">
                <img src={usdt} className="project__img" alt="" />
                <div className="project__wrapper--bg"></div>
                <div className="project__description">
                  <h1 className="project__description--title">USDT-Lebanon</h1>
                  <h4 className="project__description--sub-title">
                    HTML, CSS, JavaScript, React, Firebase
                  </h4>
                  <p className="project__description--para">
                    View Tether-USDT Offers all over Lebanon, Or Register and
                    List your own offer!
                  </p>
                  <div className="project__description--links">
                    <a
                      href="https://adnan-961.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="project__description--link"
                    >
                      <FiLink />
                    </a>
                    <a
                      href="https://github.com/Adnan-961/USDT-Lebanon"
                      target="_blank"
                      rel="noreferrer"
                      className="project__description--link"
                    >
                      <SiGithub />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </Fade>
          <Fade bottom>
            <li className="project">
              <div className="project__wrapper">
                <img src={imdb} className="project__img" alt="" />
                <div className="project__wrapper--bg"></div>
                <div className="project__description">
                  <h3 className="project__description--title">
                    TMDB Movies App
                  </h3>
                  <h4 className="project__description--sub-title">
                    HTML, CSS, JavaScript, React, TMDB API
                  </h4>
                  <p className="project__description--para">
                    A website to view the latest movies based on TMDB Api, with
                    a function to filter based on Genre and view the actors
                    details.
                  </p>
                  <div className="project__description--links">
                    <a
                      href="https://2hqlm.csb.app/"
                      className="project__description--link"
                      target={`_blank`}
                      rel="noreferrer"
                    >
                      <FiLink />
                    </a>
                    <a
                      href="https://github.com/Adnan-961/TMDB"
                      target="_blank"
                      rel="noreferrer"
                      className="project__description--link"
                    >
                      <SiGithub />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </Fade>
          <Fade bottom>
            <li className="project">
              <div className="project__wrapper">
                <img src={folio} className="project__img" alt="" />
                <div className="project__wrapper--bg"></div>
                <div className="project__description">
                  <h1 className="project__description--title">Portfolio</h1>
                  <h4 className="project__description--sub-title">
                    HTML, CSS, JavaScript, React
                  </h4>
                  <p className="project__description--para">Old Portfolio</p>
                  <div className="project__description--links">
                    <a
                      href="https://adnan-961.netlify.app/"
                      target="_blank"
                      className="project__description--link"
                      rel="noreferrer"
                    >
                      <FiLink />
                    </a>
                    <a
                      href="https://github.com/Adnan-961/old-portfolio"
                      target="_blank"
                      className="project__description--link"
                      rel="noreferrer"
                    >
                      <SiGithub />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </Fade>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
