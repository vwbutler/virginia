import React from "react";
import Button from "react-bootstrap/Button";
import "./MyLilButton.css"; // Import the CSS file for MyButton

function MyLilButton(props) {
  return (
    <Button className="my-lil-button custom-button" {...props}>
      {props.children}
    </Button>
  );
}

export default MyLilButton;
