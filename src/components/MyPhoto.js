import React from "react";
import virginiaProfile from "../images/virginiaprofile.jpg";

function MyPhoto() {
  return (
    <img
      src={virginiaProfile}
      alt="Virginia"
      style={{ width: "200px", height: "auto" }}
    />
  );
}

export default MyPhoto;
