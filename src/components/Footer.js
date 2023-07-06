import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="big-body">Tenacious. Innovative. Collaborative.</div>
        <h3>Let's connect</h3>
        <div className="social-icons">
          <a
            href="https://instagram.com/virginia.wilkins?igshid=YmMyMTA2M2Y="
            target="_blank"
            className="social-icon instagram"
          ></a>

          <a
            href="https://www.linkedin.com/in/virginiawilkinsbutler"
            target="_blank"
            className="social-icon linkedin"
          ></a>
          <a
            href="https://github.com/vwbutler"
            target="_blank"
            className="social-icon github"
          ></a>
        </div>
        <p>Phone: 803.569.8757</p>
      </div>
    </footer>
  );
}

export default Footer;
