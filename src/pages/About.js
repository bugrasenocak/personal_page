import React from "react";
import { WorkExpreinceData } from "../components/WorkExpreinceData";
import * as SiIcons from "react-icons/si";
function About() {
  return (
    <div className="about container">
      <div className="card">
        <div className="card-header">
          <h1>About Me</h1>
        </div>
        <div className="card-text">
          <p>
            I'm Ahmet Buğra Yiğiter. I am a 2nd grade student at Gazi University
            Computer Engineering.My GPA is 3.33/4. I am currently in a 3 month
            internship period in JamLab which is based India. I have been
            dealing with web technologies for a long time. I want to be a
            frontend developer. I share every work of mine on my GitHub account.
            You can see my projects in on my GitHub Account.
          </p>
        </div>
      </div>
      <div className="col-md-12 p-4">
        <h1>My Work Experience</h1>
        <div className="col-md-12 text-center">
          {WorkExpreinceData.map((item, index) => {
            return (
              <div key={index} className={item.cName}>
                <div className="card-text row d-flex justify-content-center about-card">
                  <div className="col-md-3 p-4">
                    <img
                      src={item.image}
                      alt=""
                      className="img-fluid rounded-circle p-2"
                    />
                  </div>
                  <div className="col-md-3 p-5 mt-3 about-text">
                    <h5>{item.title}</h5>
                    <h6>{item.role}</h6>
                  </div>
                  <div className="col-md-6 p-4">
                    <p>{item.about_role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
