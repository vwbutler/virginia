import React from "react";
import MyButton from "../MyButton/MyButton.js";

export default function Resume() {
  return (
    <div>
      <p>hi</p>
      <a href="./assets/pdf/virginiabutler.pdf" download>
        {" "}
        <MyButton class={MyButton} text="download" />{" "}
      </a>
    </div>
  );
}
