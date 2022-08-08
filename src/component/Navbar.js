import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import kevinImg from "../assets/images/KevinYu.png";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  if (width > 600) {
    return (
      <div className="navbar">
        <div className="logo">
          <img src={kevinImg} alt="Kevin" />
        </div>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
      </div>
    );
  } else {
    return (
      <div className="navbar">
        <div className="logo">
          <img src={kevinImg} alt="Kevin" />
        </div>
        <Menu />
      </div>
    );
  }
};

export default Navbar;
