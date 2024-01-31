import React from "react";
import "./About.css";
import jones from "./pics/jones.jpeg";

function About() {
    return (
        <div className="AboutContainer">
            <div className="aboutLeftSide">
                <img src={jones} alt="about"></img>
            </div>
            <div className="aboutRightSide">
                <h3 className="title">About Us</h3>
                <p className="aboutParagraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean venenatis congue magna, luctus imperdiet ex 
                    imperdiet et. Interdum et malesuada fames ac ante ipsum 
                    primis in faucibus. Proin placerat dignissim metus. Nam 
                    vitae fringilla neque. Nunc rutrum neque lectus, convallis 
                    cursus erat faucibus quis.
                </p>
                <p className="aboutParagraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Luctus imperdiet ex imperdiet et. Interdum et malesuada fames 
                    ac ante ipsum, aenean venenatis congue magna
                    primis in faucibus. Proin placerat dignissim metus. Nam 
                    vitae fringilla neque. Nunc rutrum neque lectus, convallis 
                    cursus erat faucibus quis.
                </p>
            </div>
        </div>
    );
  }
  
export default About;