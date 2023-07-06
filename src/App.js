import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavTabs from "./components/NavTabs";
import PortfolioContainer from "./components/PortfolioContainer";
import ContactForm from "./components/ContactForm";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";
import MyPhoto from "./components/MyPhoto";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {currentPage === "Home" && <Home />}
      {currentPage === "About" && <About />}
      {currentPage === "Project" && <Project />}
      {currentPage === "Contact" && <Contact />}
      <Footer />
    </div>
  );
}

export default App;
