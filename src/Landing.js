import React from "react";
import "./Landing.css";
import landingPic from "./pics/house3.jpeg";

function Landing() {
    return (
        <div className="LandingContainer">
            <img src={landingPic} className="landingBackground" alt="none"/>
        </div>
    );
  }
  
export default Landing;