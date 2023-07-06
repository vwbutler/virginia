import React from "react";
import Button from "react-bootstrap/Button";
import "./MyButton.css"; // Import the CSS file for MyButton

function MyButton(props) {
  return (
    <Button className="my-button custom-button" {...props}>
      {props.children}
    </Button>
  );
}

export default MyButton;
