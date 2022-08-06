import React from "react";

const Experience = ({ company, title, startDate, endDate, jobDescription }) => (
  <div className="experience">
    <h2>{company}</h2>
    <h3>{title}</h3>
    <h4>
      {startDate} - {endDate}
    </h4>
    <ul>
      {jobDescription.map((description, index) => (
        <li key={index}>{description}</li>
      ))}
    </ul>
    <hr />
  </div>
);

export default Experience;
