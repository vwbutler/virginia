import React from "react";
import MyButton from "../MyButton/MyButton.js";

export default function Resume() {
  return (
    <div>
      <a href="./assets/pdf/virginiabutler.pdf" download>
        {" "}
        <MyButton class="MyButton" type="submit">
          Download resume
        </MyButton>
      </a>
      {/* <img src={PmpImage} alt="pmp" /> */}

      <div className="cred-icons">
        <a
          href="https://www.credly.com/badges/f4997697-9038-43ac-8c76-13787f808433/public_url"
          target="_blank"
          className="cae"
          rel="noopener noreferrer"
        ></a>
        <a
          href="https://www.credly.com/badges/8db4a9dd-f317-4b23-bb62-634b64b2efda/public_url"
          target="_blank"
          className="pmp"
          rel="noopener noreferrer"
        ></a>
        <a
          href="https://badges.iiba.org/c332780e-aaf7-45fc-bcd8-2f0578806b60"
          target="_blank"
          className="cbap"
          rel="noopener noreferrer"
        ></a>
      </div>

      <div>
        <h3>July 2023: Full Stack Web Developer Skills</h3>
        <p style={{ color: "white", margin: "0 240px" }}>
          Through the{" "}
          <a
            href="https://bootcamp.unc.edu/coding/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            Coding Boot Camp at the University of North Carolina at Chapel Hill
          </a>
          , I have developed a strong foundation in full-stack development. This
          intensive program provided hands-on experience through diverse
          projects and assignments, enabling me to apply my skills in frontend
          technologies, backend technologies, databases, server-side
          programming, and more.
        </p>
      </div>
    </div>
  );
}
