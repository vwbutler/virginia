import React from "react";
import { Link } from "react-router-dom";

function Header({ handlePageChange }) {
  const pageLinks = [
    { pageName: "Home", label: "Home" },
    { pageName: "About", label: "About" },
    { pageName: "Project", label: "Project" },
    { pageName: "Contact", label: "Contact" },
  ];

  return (
    <div>
      <h1>Virginia Butler</h1>
      <nav>
        {pageLinks.map((page) => (
          <Link
            key={page.pageName}
            to={`/${page.pageName.toLowerCase()}`}
            className="nav-link"
            onClick={() => handlePageChange(page.pageName)}
          >
            {page.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Header;
