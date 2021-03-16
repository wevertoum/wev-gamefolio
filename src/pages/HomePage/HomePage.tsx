import React from "react";
import "./HomePage.less";

interface Props {}
const HomePage: React.FC<Props> = () => {
  return (
    <div className="main-content">
      <div className="awesome-intro">
        <h1>PLAY IT</h1>
      </div>
      <div className="graph-container">
        <div className="graph"></div>
      </div>
    </div>
  );
};

export default HomePage;
