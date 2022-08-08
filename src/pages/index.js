import React from "react";
import { About, Projects, Work, Education } from "../sections";
import Navbar from "../component/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Work />
      <Education />
    </>
  );
};

export default Main;
