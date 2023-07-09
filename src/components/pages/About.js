import React from "react";

// const PhotoAndText = () => {
//   const containerStyle = {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "left",
//     justifyContent: "left",
//     padding: "10px",
//     // border: "10px solid black",
//   };

//   const photoStyle = {
//     flexBasis: "33.33%",
//     paddingRight: "10px",
//     paddingLeft: "200px",
//     paddingTop: "40px",
//   };

//   const imageStyle = {
//     maxWidth: "100%",
//     height: "auto",
//     borderRadius: "15%",
//   };

//   const textStyle = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column",
//     marginTop: "20px",
//     marginBottom: "20px",
//     // marginLeft: "500px",
//     // marginRight: "200px",
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={photoStyle}>
//         <img
//           src="../images/virginiaprofile.jpg"
//           alt="Virginia Butler"
//           style={imageStyle}
//         />
//       </div>
//       <div style={textStyle}>
//         <p className="subtext">
//           Virginia is an experienced project manager and business analyst
//           specializing in digital solutions.
//         </p>
//         <p className="subtext">
//           When she is not slogging through challenging problems, Virginia enjoys
//           spending time with her mom, Betsy, her lovely daughters
//           #thebutlersisterssc, and Gary, her sweet fella.
//         </p>
//         <p className="subtext">
//           Virginia is an avid traveler and a lifelong learner. She is curious,
//           adaptable and always ready for a new challenge.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default PhotoAndText;

export default function About() {
  return (
    <div>
      <p>
        Virginia is an experienced project manager and business analyst
        specializing in digital solutions.
      </p>
      <p>
        When she is not slogging through challenging problems, Virginia enjoys
        spending time with her mom, Betsy, her lovely daughters
        #thebutlersisterssc, and Gary, her sweet fella.
      </p>
      <p>
        Virginia is an avid traveler and a lifelong learner. She is curious,
        adaptable and always ready for a new challenge.
      </p>
    </div>
  );
}
