import React from "react";
import "./HomePage.css";
import SideNav from "./Naviagation/SideNav";
import TimeLine from "./TimeLine/Timeline";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage-nav">
        <SideNav />
      </div>
      <div className="homepage-timeline">
        <TimeLine />
      </div>
    </div>
  );
};

export default HomePage;
