// import React from "react";
import "./navbar.scss";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const NavbarComponent = () => {
  const [hamburger, sethamburger] = useState(false);

  // console.log("line10", hamburger);
  // const [ham, setHam] = useState(false);
  return (
    <div className="nav_wrapper">
      <nav className="NavbarComponent">
        <div className="navLogo">
          Rahul<span>Dev</span>
        </div>
        <div className="navlinks">
          <Link
            activeClass="active"
            className="desktopTopMenuItems"
            to="HeroComponent"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            className="desktopTopMenuItems"
            to="Aboutcomponent"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About
          </Link>
          <Link
            activeClass="active"
            className="desktopTopMenuItems"
            to="Experience"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Work Experience
          </Link>
        </div>
        <div className="desktopMenuButton">
          <Link
            activeClass="active"
            className="desktopTopMenuItems"
            to="ContactComponent"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button>Contact me</button>
          </Link>
        </div>
        <RxHamburgerMenu
          className="hamburger_icon_mobile"
          onClick={() => sethamburger(!hamburger)}
        />
      </nav>
      {hamburger && (
        <div className={hamburger ? "mobileNavlinks" : "mobileNavlinks_hide"}>
          <Link
            activeClass="active"
            className="desktopTopMenuItems"
            to="HeroComponent"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => sethamburger(false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            className="desktopTopMenuItems"
            to="Aboutcomponent"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => sethamburger(false)}
          >
            About
          </Link>
          <Link
            activeClass="active"
            className="desktopTopMenuItems"
            to="Experience"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => sethamburger(false)}
          >
            Work Experience
          </Link>
          <Link
            activeClass="active"
            className="desktopTopMenuItems"
            to="ContactComponent"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => sethamburger(false)}
          >
            <button className="mobile_contact_button">Contact me</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavbarComponent;
