import React from "react";
import ContactForm from "../ContactForm";

// export default function Contact() {
//   return (
//     <div>
//       {/* <h1>Get in touch with Virginia</h1> */}
//       <ContactForm />
//     </div>
//   );
// }
// Previous contact form code here - commented out or removed

const IframeForm = () => (
  <div>
    <iframe
      src="https://www.cognitoforms.com/f/XnZmNzhosEyz3ojGhCuXpQ/2"
      style={{ border: 0, width: "100%" }}
      height="510"
    ></iframe>
    <script src="https://www.cognitoforms.com/f/iframe.js"></script>
  </div>
);

export default IframeForm;
