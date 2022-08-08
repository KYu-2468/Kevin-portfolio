import React, { useEffect, useState } from "react";
import { Bounce, Zoom } from "react-reveal";
import Shake from "react-reveal/Shake";

const About = () => {
  const [greet, setGreet] = useState("");
  const [intro, setIntro] = useState("");
  const greetStr = "Hey there!";
  const introStr = "My name is ";

  useEffect(() => {
    let greetId;
    let introId;
    if (greet === "") {
      greetId = setInterval(() => {
        setGreet((greet) => {
          if (greet.length === greetStr.length) {
            clearInterval(greetId);
          }
          return greetStr.slice(0, greet.length + 1);
        });
      }, 100);
    }
    if (intro === "") {
      setTimeout(() => {
        introId = setInterval(() => {
          setIntro((intro) => {
            if (intro.length === introStr.length) {
              clearInterval(introId);
            }
            return introStr.slice(0, intro.length + 1);
          });
        }, 100);
      }, 1700);
    }

    return () => {
      clearInterval(greetId);
      clearInterval(introId);
    };
  }, []);

  return (
    <div id="about">
      <div className="section intro">
        <p>{greet}</p>
        <p>{intro}</p>
        <div>
          <Zoom delay={3000}>
            <div>
              <p className="glow">KEVIN</p>
            </div>
          </Zoom>
        </div>
        <Bounce left delay={4000}>
          <Shake delay={5000}>
            <p className="title">Software Engineer</p>
          </Shake>
        </Bounce>
        <p style={{ textIndent: "20px", border: "solid", padding: "10px" }}>
          I enjoy building fun and interactive apps to connect businesses with
          customers. I'm experienced in frontend and backend development. Let me
          help you build your next product.
        </p>
      </div>
    </div>
  );
};

export default About;
