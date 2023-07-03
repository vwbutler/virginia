import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <h3>Let's Connect</h3>
        <div className="social-icons">
          <a
            href="https://instagram.com/virginia.wilkins?igshid=YmMyMTA2M2Y="
            target="_blank"
            className="social-icon instagram"
          ></a>
          <a href="https://www.linkedin.com">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.github.com">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <p>Phone: 803.569.8757</p>
      </div>
    </footer>
  );
}

export default Footer;
