import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="aboutContainer">
        <div className="aboutContent">
          <h2 className="aboutTitle">About Me</h2>

          <p className="aboutDesc">
            I’m <span>Tanmay Vinod Pawar</span>, currently pursuing a Bachelor
            of Engineering in Information Technology from Savitribai Phule Pune
            University (SPPU).
          </p>

          <p className="aboutDesc">
            I’m passionate about web development, problem solving, and building
            modern responsive websites. Currently, I’m focused on improving my
            Full Stack Development and DSA skills while working on real-world
            projects using React, JavaScript, and Node.js.
          </p>

          <button className="aboutBtn">Resume</button>
        </div>
      </div>
    </section>
  );
};

export default About;
