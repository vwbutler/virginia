import React from "react";

function Header() {
  return (
    <header>
      <div className="header-container">
        <img
          src="../assets/images/vecteezy_illustration-cartoon-rocket-cute-rocket-cartoon-vector_17745722_428.png"
          alt="cute rocket"
          style={{
            maxWidth: "10%",
            height: "10%",
            paddingRight: "10px",
            paddingLeft: "10px",
            paddingTop: "10px",
            display: "block",
          }}
        />
        <div className="name">Virginia Wilkins Butler</div>
      </div>
    </header>
  );
}

export default Header;
