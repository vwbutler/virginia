import React from "react";

function PortfolioContainer() {
  // Array of portfolio items
  const portfolioItems = [
    {
      id: 1,
      title: "Project 1",
      description: "This is the description of Project 1",
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is the description of Project 2",
    },
    {
      id: 3,
      title: "Project 3",
      description: "This is the description of Project 3",
    },
  ];

  return (
    <div>
      <h2>Portfolio</h2>
      <div className="card-container">
        {portfolioItems.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioContainer;
