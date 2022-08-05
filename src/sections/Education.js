import React from "react";
import School from "../component/School";
import fullstackCert from "../assets/images/FullstackCert.png";
import googleDataCert from "../assets/images/GoogleDataCert.png";

const Education = () => {
  const fullstackDes =
    "Fullstack Academy is an immersive web development bootcamp with campuses in New York City, Chicago, and online.";
  const googleDataDes =
    "Get professional training designed by Google and have the opportunity to connect with top employers.";

  return (
    <div id="education" className="section">
      <h1>Education:</h1>
      <School
        school="Fullstack Academy"
        description={fullstackDes}
        image={fullstackCert}
      />
      <School
        school="Google Data Analytics"
        description={googleDataDes}
        image={googleDataCert}
      />
    </div>
  );
};

export default Education;
