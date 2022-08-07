import React from "react";
import { Bounce, Flip, Zoom } from "react-reveal";
import Shake from "react-reveal/Shake";

const About = () => (
  <div id="about" className="section">
    <div className="intro">
      <p>Hi there!</p>
      <div style={{ display: "inline-block" }}>
        <p className="typewriter">Nice to meet you. My name is:</p>
      </div>
      <div>
        <Zoom delay={3000}>
          <p className="name">Kevin</p>
        </Zoom>
      </div>
      <Bounce left delay={4000}>
        <Shake delay={4500}>
          <p>A software engineer</p>
        </Shake>
      </Bounce>
      <Flip delay={6000}>
        <p
          style={{ textAlign: "left", textIndent: "30px", marginLeft: "20px" }}
        >
          As a full-stack software engineer and developer, I enjoy building
          interactive apps to connect businesses with customers using HTML, CSS,
          JavaScript, React, Express, Redux, Node, Firebase, PostgreSQL,
          Sequelize, and SQL. As a team player and technician with over five
          years of experience in wireless testing, I learned that open
          communication, thoughtful planning, and an inclusive environment are
          essential for any successful team. As a life-long learner, I am
          enthusiastic learning about mastering new concepts, skills, and
          technologies to equip myself with tools that make me more competitive
          and adaptive in this ever-changing world.
        </p>
      </Flip>
    </div>
  </div>
);

export default About;
