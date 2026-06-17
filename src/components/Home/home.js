import React from "react";
import "./home.css";
import bg from "../../assets/My_Image.png";

const Home = () => {
  return (
    <div className="container-fluid" id="home">
      <div className="row align-items-center">
        <div className="col-lg-4 order-1 order-lg-2 img-container">
          <img src={bg} alt="Profile" className="bg" />
        </div>

        <div className="col-lg-8 order-2 order-lg-1 info-container">
          <p className="greeting">Hello, I'm</p>

          <h1 className="name">
            <span className="text-warning">Tanmay Pawar</span>
          </h1>

          <h3 className="role">
            Software Engineer | MERN Stack Developer | DSA Enthusiast
          </h3>

          <p className="about">
            I build responsive web applications and solve algorithmic problems
            to create efficient digital solutions.
          </p>
        </div>
      </div>

      <div className="listItem">
        <div className="item">
          <a
            href="https://leetcode.com/u/tanmaypawar23/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            <h2 className="text-warning">50+</h2>
            <p>LeetCode Problems Solved</p>
          </a>
        </div>

        <div className="item">
          <h2 className="text-warning">8.5+</h2>
          <p>CGPA</p>
        </div>

        <div className="item">
          <h2 className="text-warning">3+</h2>
          <p>Full-Stack Projects</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
