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

  if (width > 500) {
    return (
      <div className="navbar">
        <Menu />
      </div>
    );
  } else {
    return (
      <div>
        <div className="navbar">
          <img src={kevinImg} alt="Kevin" />
          <Menu />
        </div>
      </div>
    );
  }
};

export default Navbar;
