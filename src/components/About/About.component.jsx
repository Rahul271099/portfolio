// import React from "react";
import "./about.scss";

const Aboutcomponent = () => {
  return (
    <div className="about_section" id="Aboutcomponent">
      <section className="skills">
        <div className="skills_head">
          <h3>About</h3>
          <p>
            As a seasoned full-stack web developer, I offer comprehensive
            services encompassing the entire web development spectrum. With a
            keen eye for user interface design and a mastery of frontend
            technologies, I create visually appealing and intuitive user
            experiences. On the backend, my expertise lies in crafting robust
            and scalable server-side logic, ensuring seamless functionality.
            Leveraging my proficiency in database management.
          </p>
        </div>
        <div className="skills_middle">
          <div>
            <span>Javascript</span>
            <img src="/logos/js.png" alt="javascript" />
          </div>
          <div>
            <span>Django</span>
            <img src="/logos/django.png" alt="django" />
          </div>
          <div>
            <span>Python</span>
            <img src="/logos/python.png" alt="python" />
          </div>
          <div>
            <span>Express</span>
            <img src="/logos/express.png" alt="express" />
          </div>
          <div>
            <span>MySQL</span>
            <img src="/logos/mysql.png" alt="mysql" />
          </div>
          <div>
            <span>Mongodb</span>
            <img src="/logos/mongodb.png" alt="mongodb" />
          </div>
          <div>
            <span>Redux</span>
            <img src="/logos/redux.png" alt="redux" />
          </div>
          <div>
            <span>React.js</span>
            <img src="/logos/react.png" alt="react" />
          </div>
          <div>
            <span>Node.js</span>
            <img src="/logos/nodejs.png" alt="node.js" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutcomponent;
