import React from "react";
import Experience from "../component/Experience";

const Work = () => {
  const jobs = [
    {
      company: "Freelance",
      title: "Software Engineer",
      startDate: "Aug 2022",
      endDate: "Present",
      jobDescription: [""],
    },
    {
      company: "Fullstack Academy",
      title: "Software Engineer in training",
      startDate: "Mar 2022",
      endDate: "Jul 2022",
      jobDescription: [""],
    },
    {
      company: "SGS",
      title: "Wireless 4G/5G RF Test Technician",
      startDate: "Jun 2017",
      endDate: "Jul 2022",
      jobDescription: [
        "Trained full-time engineers and interns on 4G/5G system operations",
        "Analyzed inconclusive logs to determine the root cause of inconclusive results",
        "Learned 5G system operations via reading documentations, asking system vendors, and experimenting new ideas",
      ],
    },
    {
      company: "SGS",
      title: "Software Enigneer Intern",
      startDate: "Jan 2019",
      endDate: "Aug 2020",
      jobDescription: [
        "Assisted senior software engineers on automating data entry tasks to database",
        "Analyzed and debugged automation systems to provide patches that fix known issues",
        "Shared automation-log project’s weekly status to managers, team members, and stakeholders",
        "Designed a Java program that extracts raw XML data and compiles the maximum, minimum, an average time to perform each test case; results are used to provide quotes to customers",
      ],
    },
    {
      company: "SGS",
      title: "Wireless Test Intern",
      startDate: "Jun 2017",
      endDate: "Jan 2019",
      jobDescription: [
        "Certified customer’s wireless device by performing Verizon and Sprint tests to ensure customers devices meet industry standards",
        "Collected device internal logs and QXDM logs to analyze the potential cause for failed test cases",
      ],
    },
    {
      company: "Souplantation",
      title: "Cashier",
      startDate: "Jan 2019",
      endDate: "Mar 2020",
      jobDescription: [
        "Greeted customers to ensure their experiences were enjoyable and comfortable.",
        "Resolved customers' complaints calmly and carefully to de-escalate the situation",
        "Assisted team members in case there was a backlog to limit the negative impact on customers' experience.",
      ],
    },
  ];

  return (
    <div id="work" className="section">
      <h1>Experiences:</h1>
      {jobs.map((job, index) => (
        <Experience
          key={index}
          company={job.company}
          title={job.title}
          startDate={job.startDate}
          endDate={job.endDate}
          jobDescription={job.jobDescription}
        />
      ))}
    </div>
  );
};

export default Work;
