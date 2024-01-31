import React from "react";
import "./About.css";

function About() {
    return (
        <div className="AboutContainer">
            <h1 className="title">About Us</h1>

            <div className="aboutThem">
                <div className="person">
                    <div className="titleAndPic">
                        <h3>Matt Davies</h3>
                        <span></span>
                        <h4>Media Information</h4>
                    </div>
                    <b>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aenean venenatis congue magna, luctus imperdiet ex 
                        imperdiet et. Interdum et malesuada fames ac ante ipsum 
                        primis in faucibus. Proin placerat dignissim metus. Nam 
                        vitae fringilla neque. Nunc rutrum neque lectus, convallis 
                        cursus erat faucibus quis.
                    </b>
                </div>

                <div className="person">
                    <div className="titleAndPic">
                        <h3>Lukas Vht</h3>
                        <span></span>
                        <h4>Media Information</h4>
                    </div>
                    <b>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aenean venenatis congue magna, luctus imperdiet ex 
                        imperdiet et. Interdum et malesuada fames ac ante ipsum 
                        primis in faucibus. Proin placerat dignissim metus. Nam 
                        vitae fringilla neque. Nunc rutrum neque lectus, convallis 
                        cursus erat faucibus quis.
                    </b>
                </div>
            </div>
        </div>
    );
  }
  
export default About;