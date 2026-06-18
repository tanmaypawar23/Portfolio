import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
import { Link } from "react-scroll";
import Menu from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar container">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={50}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={50}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={50}
          className="desktopMenuListItem"
        >
          Skills
        </Link>
        <Link className="desktopMenuListItem">projects</Link>
        <Link className="desktopMenuListItem">Experience</Link>
        <a
          href="/TanmayPawar_Resume.pdf"
          className="desktopMenuListItem"
          target="_blank"
          rel="noopener noreferrer" //noopener prevents the new tab from controlling your website.noreferrer hides information about the page that opened the link.
        >
          Resume
        </a>
      </div>
      <button className="desktopMenuBtn">
        <img src={contactImg} alt="" className="desktopMenuImg" />
        Contact Me
      </button>

      <img
        src={Menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={50}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={50}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={50}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Skills
        </Link>
        <Link className="listItem" onClick={() => setShowMenu(false)}>
          projects
        </Link>
        <Link className="listItem" onClick={() => setShowMenu(false)}>
          Experience
        </Link>
        <a
          href="/TanmayPawar_Resume.pdf"
          className="listItem"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <Link className="listItem" onClick={() => setShowMenu(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
