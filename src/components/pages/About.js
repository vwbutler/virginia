// import React from "react";
// import MyPhoto from "../MyPhoto";

// function About() {
//   return (
//     <div>
//       <MyPhoto />
//       <div>
//         <div>
//           <p class="subtext">
//             Virginia is an experienced project manager and business analyst
//             specializing in digital solutions.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;

import React from "react";

const PhotoAndText = () => {
  const containerStyle = {
    display: "flex",
    border: "10px solid black",
  };

  const photoStyle = {
    flexBasis: "33.33%",
    paddingRight: "10px",
    paddingLeft: "200px",
    paddingTop: "20px",
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
  };

  const textStyle = {
    flexBasis: "66.67%",
    paddingRight: "10px",
    paddingLeft: "200px",
    paddingTop: "20px",
  };

  return (
    <div style={containerStyle}>
      <div style={photoStyle}>
        <img
          src="./assets/images/virginiaprofile.jpg"
          alt="Virginia Butler"
          style={imageStyle}
        />
      </div>
      <div style={textStyle}>
        <p className="subtext">
          Virginia is an experienced project manager and business analyst
          specializing in digital solutions.
        </p>
      </div>
    </div>
  );
};

export default PhotoAndText;
