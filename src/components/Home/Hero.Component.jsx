// import React from "react";
import "./hero.scss";
// import { Link } from "react-scroll";
// import resume from "/Cv_RahulMunj.pdf";
const HeroComponent = () => {
  return (
    <section className="hero" id="HeroComponent">
      <div className="wrapper">
        <div className="heroContain">
          <div className="hero_text">
            <h2>hello,</h2>
            <h1>
              I am <span>Rahul Munj</span>
            </h1>
            <h2>Full Stack Web Developer</h2>
            <p>
              Full Stack Web Developer with hands-on experience in{" "}
              <span>frontend and Backend development</span>, Experience in
              working with cross-functional teams
            </p>
          </div>
          <div className="button_container">
            <a href="/Cv_RahulMunj.pdf" download="Resume">
              hire Me
            </a>
          </div>
        </div>
        <div className="imageContainer">
          <img src="Images/hero.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
