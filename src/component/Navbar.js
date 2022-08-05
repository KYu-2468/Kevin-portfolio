import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About Me</Link>
    <Link to="/portfolios">Portfolios</Link>
  </div>
);

export default Navbar;
