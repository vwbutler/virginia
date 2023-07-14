import React from "react";
import foodleImage from "../images/foodle.jpg";
import sidehustleImage from "../images/sh.png";
import wdschedulerImage from "../images/wdsched.png";
import jotjoyImage from "../images/jotjoy.png";
import MyLilButton from "./MyLilButton/MyLilButton";
import weathdashImage from "../images/weatherdash.png";
import journeyverseImage from "../images/journeyverse.jpg";

function PortfolioContainer() {
  // Array of my portfolio items
  const portfolioItems = [
    {
      id: 1,
      title: "Foodle",
      description: "Interactive Front-End Application",
      image: foodleImage,
      applink: "https://gpaul12.github.io/foodle/",
      repolink: "https://github.com/gpaul12/foodle",
    },
    {
      id: 2,
      title: "Side Hustle",
      description: "Interactive Full-Stack Application",
      image: sidehustleImage,
      applink: "https://side-hustle.herokuapp.com/",
      repolink: "https://github.com/dimartoro/side-hustle",
    },
    {
      id: 3,
      title: "JourneyVerse",
      description: "MERN Stack Single-Page Application (in development)",
      image: journeyverseImage,
      applink: "https://journeyverse-2c53482d7e17.herokuapp.com/",
      repolink: "https://github.com/pexApred/journeyVerse",
    },
    {
      id: 4,
      title: "Work Day Simplify",
      description: "Dipping my toe in a third-party API",
      image: wdschedulerImage,
      applink: "https://vwbutler.github.io/workday-scheduler/",
      repolink: "https://github.com/vwbutler/workday-scheduler",
    },
    {
      id: 5,
      title: "Jot Joy",
      description: "Express, Heroku, and joy",
      image: jotjoyImage,
      applink: "https://jot-joy.herokuapp.com/",
      repolink: "https://github.com/vwbutler/jot-joy",
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description: "What portfolio is complete without a weather dashboard?",
      image: weathdashImage,
      applink: "https://vwbutler.github.io/weather-dashboard/",
      repolink: "https://github.com/vwbutler/weather-dashboard",
    },
  ];

  return (
    <div>
      <div className="card-container">
        {portfolioItems.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.title}</h3>
            <p> {item.description}</p>
            <img src={item.image} alt={item.title} />
            {/* <a
              href={item.applink}
              target="_blank"
              rel="noreferrer"
              className="application-link"
            >
              Try the application
            </a>
            <a
              href={item.repolink}
              target="_blank"
              rel="noreferrer"
              className="repository-link"
            >
              Access the repository
            </a> */}
            <MyLilButton href={item.applink}>application</MyLilButton>
            <MyLilButton href={item.repolink}>repository</MyLilButton>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioContainer;
