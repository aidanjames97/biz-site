import React from "react";
import { Link } from 'react-scroll'
import "./Navbar.css";

function Navbar() {
    return (
        <div className="NavbarContainer">
            <Link className="nameContain"
                to="landing"
                smooth={true}
                duration={500}
                spy={true}
            >
                <h1>MDLV</h1>
            </Link>
            <div className="rightSideNav">
                    <Link className="navButton"
                        to="about" // section name
                        smooth={true} // smooth scroll
                        duration={500} // 500ms
                        spy={true} // link is selected when scroll at traget postion
                        offset={-75} // for navbar height
                    >
                        About Us
                    </Link>
                
                    <Link className="navButton"
                        to="products"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-75} // for navbar height
                    >
                        Products
                    </Link>
                
                    <Link className="navButton"
                        to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-75} // for navbar height
                    > 
                        Contact Us
                    </Link>
            </div>

        </div>
    );
  }
    
export default Navbar;