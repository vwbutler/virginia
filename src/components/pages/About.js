import React from "react";
import MyPhoto from ".images/virginia-profile.jpg";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>

      <img
        src={MyPhoto}
        alt="Virginia"
        style={{ width: "200px", height: "auto" }}
      />

      <h2>
        I am passionate about simplifying people's lives through technology. I
        approach every project with a determined and courteous attitude, always
        striving to deliver optimal results. As a Business Systems Analyst at
        the Municipal Association of South Carolina, I recommend, implement, and
        oversee systems that enhance the association's operations and service
        delivery to its member cities. I am committed to continuous learning and
        improvement to stay ahead of the curve in an ever-evolving tech
        landscape.
      </h2>
    </div>
  );
}
