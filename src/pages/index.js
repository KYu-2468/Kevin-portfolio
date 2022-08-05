import React from "react";
import { About, Projects, Work, Education } from "../sections";
import Navbar from "../component/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Work />
      <Education />
    </div>
  );
};

export default Main;
