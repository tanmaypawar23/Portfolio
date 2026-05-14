import React from "react";
import "./skills.css";

import HTMLImg from "../../assets/final_html.png";
import CSSImg from "../../assets/css.png";
import JSImg from "../../assets/js.png";
import NodeJsImg from "../../assets/nodeJs.png";
import MongoDBImg from "../../assets/mongodb.png";
import ReactJsImg from "../../assets/reactJs.png";
import JavaImg from "../../assets/java.png";
import ExpressJsImg from "../../assets/expressJs.png";
import GitHubImg from "../../assets/github.png";
import SQLImg from "../../assets/SQL.png";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container text-center">
        <h2 className="aboutTitle">Skills</h2>

        <div className="row justify-content-center">
          <div className="col-6 col-md-4 col-lg-3">
            <img src={HTMLImg} alt="HTML" className="skillImg" />
            <p>HTML</p>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <img src={CSSImg} alt="CSS" className="skillImg" />
            <p>CSS</p>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <img src={JSImg} alt="JS" className="skillImg" />
            <p>Javascript</p>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <img src={NodeJsImg} alt="NodeJs" className="skillImg" />
            <p>Node.js</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 col-md-4 col-lg-3">
            <img src={ExpressJsImg} alt="ExpressJs" className="skillImg" />
            <p>Express.js</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <img src={MongoDBImg} alt="MongoDB" className="skillImg" />
            <p>MongoDB</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <img src={ReactJsImg} alt="reactJs" className="skillImg" />
            <p>React.js</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <img src={JavaImg} alt="java" className="skillImg" />
            <p>Java</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <img src={GitHubImg} alt="gitHub" className="skillImg" />
            <p>Git/GitHub</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <img src={SQLImg} alt="SQL" className="skillImg" />
            <p>SQL</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
