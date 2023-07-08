import React from "react";

const PhotoAndText = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "left",
    justifyContent: "left",
    padding: "10px",
    // border: "10px solid black",
  };

  const photoStyle = {
    flexBasis: "33.33%",
    paddingRight: "10px",
    paddingLeft: "200px",
    paddingTop: "40px",
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "15%",
  };

  const textStyle = {
    flexBasis: "66.67%",
    paddingRight: "10px",
    paddingLeft: "20px",
    paddingTop: "20px",
  };

  return (
    <div style={containerStyle}>
      <div style={photoStyle}>
        <img
          src="../assets/images/virginiaprofile.jpg"
          alt="Virginia Butler"
          style={imageStyle}
        />
      </div>
      <div style={textStyle}>
        <p className="subtext">
          Virginia is an experienced project manager and business analyst
          specializing in digital solutions.
        </p>
        <p className="subtext">
          When she is not slogging through challenging problems, Virginia enjoys
          spending time with her mom, Betsy, her lovely daughters
          #thebutlersisterssc, and Gary, her sweet fella.
        </p>
        <p className="subtext">
          Virginia is an avid traveler and a lifelong learner. She is curious,
          adaptable and always ready for a new challenge.
        </p>
      </div>
    </div>
  );
};

export default PhotoAndText;
