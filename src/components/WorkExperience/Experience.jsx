// import React from "react";
import "./experience.scss";

const Experience = () => {
  return (
    <div className="main_experience_container" id="Experience">
      <h2 className="myExperience">My Experiences:</h2>
      <section className="experience_head">
        <div className="experience_card">
          <h2>Jindal Mobilitric</h2>
          <p>Web Developer</p>
          <div className="responsibilities">
            <ul>
              <li>
                Designed and implemented user interfaces utilizing HTML, CSS,
                and JavaScript to achieve optimal functionality and aesthetics.
              </li>
              <li>
                Ensured cross-browser compatibility and implemented responsive
                design, resulting in a seamless user experience across various
                devices.
              </li>
              <li>
                Coordinated with project stakeholders to ensure alignment with
                project goals and objectives, fostering effective communication
                and collaboration.
              </li>
              <li>
                Implemented SEO strategies and user-friendly layouts,
                contributing to a 40% growth in website traffic and enhancing
                overall site performance.
              </li>
            </ul>
          </div>
        </div>
        <div className="experience_card">
          <h2>Earth Energy Ev</h2>
          <p>Web Developer</p>
          <div className="responsibilities">
            <ul>
              <li>
                Applied responsive design principles to create intuitive and
                accessible layouts.
              </li>
              <li>
                Collaborated closely with multidisciplinary teams to implement
                project requirements and deliver high-quality web solutions.
              </li>
              <li>
                Implemented enhancements and optimizations to improve website
                speed and SEO performance.
              </li>
              <li>
                Utilized Figma to create comprehensive wireframes and diverse
                layout prototypes.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
