import React from "react";
import virginiaProfile from "./assets/images/virginiaprofile.jpg";

function MyPhoto() {
  return (
    <img
      src={virginiaProfile}
      alt="Virginia"
      style={{
        width: "200px",
        height: "auto",
        alignItems: "center",
        marginRight: "20px",
        marginLeft: "20px",
        marginTop: "20px",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: "50%",
        padding: "30px",
      }}
    />
  );
}

export default MyPhoto;
