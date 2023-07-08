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
    </div>
  );
}
