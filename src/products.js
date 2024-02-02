import React from "react";
import "./products.css";
import house1 from "./pics/house1.jpeg";
import com from "./pics/com.jpeg";
import event from "./pics/event.jpeg";

function products() {
    return (
        <div className="productsContainer">
            <div className="textLeft">
                <h1 className="titleProducts">Products</h1>
                <div className="difTexts">
                    <b className="comText">
                        Our commerial package includes a multitude of video and
                        photographic tools to portray your business in its best light!
                        Key services we provide are:
                        <ul>
                            <li>360 space mapping</li>
                            <li>High-Resolution pictures</li>
                            <li>Drone footage of site</li>
                            <li>In house editing and picture enhancements</li>
                        </ul>
                    </b>
                    <b className="resText">
                        Our residential package includes a multitude of video and
                        photographic tools to portray your home or appartement
                        in its best light! Key services we provide are:
                        <ul>
                            <li>360 space mapping</li>
                            <li>High-Resolution pictures</li>
                            <li>Drone footage of site</li>
                            <li>In house editing and picture enhancements</li>
                        </ul>
                    </b>
                    <b className="eventText">
                        Our events package includes a multitude of video and
                        photographic tools to truly bring the event to life.
                        Key services we provide are:
                        <ul>
                            <li>360 space mapping</li>
                            <li>High-Resolution pictures</li>
                            <li>Drone footage of site</li>
                            <li>In house editing and picture enhancements</li>
                        </ul>
                        </b>
                </div>
            </div>

            <div className="rightSide">
                <button className="picContainR">
                    <img src={house1} alt="rez"></img>
                    <div className="textMiddle">RESIDENTIAL</div>
                </button>

                <button className="picContainC">
                    <img src={com} alt="rez"></img>
                    <div className="textMiddle">COMMERCIAL</div>
                </button>

                <button className="picContainE">
                    <img src={event} alt="event"></img>
                    <div className="textMiddle">EVENTS</div>
                </button>
            </div>
        </div>
    );
  }
  
export default products;