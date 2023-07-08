import React from "react";

function PortfolioContainer() {
  // Array of portfolio items
  const portfolioItems = [
    {
      id: 1,
      title: "Foodle",
      description: "Interactive Front-End Application",
    },
    {
      id: 2,
      title: "Side Hustle",
      description: "Interactive Full-Stack Application",
    },
    {
      id: 3,
      title: "JourneyVerse",
      description: "MERN Stack Single-Page Application",
    },
  ];

  return (
    <div>
      <div className="card-container">
        {portfolioItems.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.title}</h3>
            <p> {item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioContainer;
