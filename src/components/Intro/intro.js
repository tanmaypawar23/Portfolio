import React from "react";
import "./intro.css";
import bg from "../../assets/My_Image.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Tanmay</span>
          <br /> FullStack Developer
        </span>
        <p className="introPara">
          Passionate IT engineering student focused on web development, problem
          solving, and building real-world projects.
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire Me" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
