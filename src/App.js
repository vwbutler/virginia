import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* {currentPage === "Home" && <Home />} */}
      {currentPage === "About" && <About />}
      {currentPage === "Project" && <Project />}
      {currentPage === "Resume" && <Resume />}
      {currentPage === "Contact" && <Contact />}

      <Footer />
    </div>
  );
}

export default App;
