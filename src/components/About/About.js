import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row fs-4 mx-5">
          <div className="col">
            <h2 className="aboutTitle text-center text-warning fw-bold pb-5 pt-5">
              About Me
            </h2>

            <p className="aboutDesc">
              Hi, I’m <span className="text-warning fw-bold">Tanmay Pawar</span>{" "}
              — a passionate BE IT student in SPPU university and MERN Stack
              Developer with an 8.5+ CGPA, focused on building modern,
              responsive, and scalable full-stack web applications.
            </p>

            <p className="aboutDesc">
              I have hands-on experience working with the MERN Stack (MongoDB,
              Express.js, React.js, Node.js) along with strong knowledge of core
              web development concepts and Data Structures & Algorithms (DSA),
              with regular problem-solving practice to strengthen logical
              thinking and coding skills.
            </p>
            <p className="aboutDesc">
              Beyond coding, I bring strong leadership and teamwork abilities
              through academic projects where I’ve successfully collaborated
              with teams, managed responsibilities, and delivered quality
              solutions within deadlines.
            </p>
            <p className="aboutDesc">
              Currently, I’m seeking a Web Development / Full-Stack Internship
              where I can apply my skills, solve real-world problems, learn from
              industry professionals, and continue growing as a developer.
            </p>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default About;
