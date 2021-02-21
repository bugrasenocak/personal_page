import React, { Component } from "react";
import { ProjectsData } from "../components/ProjectsData";
import * as FaIcons from "react-icons/fa";
class Projects extends Component {
  render() {
    return (
      <div className="container projects">
        <div className="row">
          <h1>Projects</h1>
          {ProjectsData.map((item, index) => {
            return (
              <div key={index} className="col-md-4 project">
                <h3 className="text-center">{item.title}</h3>
                <div className="information">
                  <p className="text-center information-text">
                    {item.description}
                  </p>
                  <div
                    style={{ color: "#c9ccd3" }}
                    className="projects-link text-center mb-4"
                  >
                    <a
                      href={item.github_link}
                      style={{ color: "#c9ccd3" }}
                      className="mx-2"
                    >
                      <FaIcons.FaGithub />
                    </a>
                    <a
                      href={item.live_demo}
                      style={{ color: "#c9ccd3" }}
                      className="mx-2"
                    >
                      <FaIcons.FaLink />
                    </a>
                  </div>

                  <p className="text-center">
                    <span style={{ color: "#c9ccd3" }}>Used technologies:</span>
                    <br />
                    {item.used_tech.map((item, index) => {
                      return (
                        <li className="d-inline-block m-2" key={index} disabled>
                          {item}
                        </li>
                      );
                    })}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Projects;
