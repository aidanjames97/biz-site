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
                <b className="comText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean venenatis congue magna, luctus imperdiet ex 
                    imperdiet et. Interdum et malesuada fames ac ante ipsum 
                    primis in faucibus. Proin placerat dignissim metus. Nam 
                    vitae fringilla neque. Nunc rutrum neque lectus, convallis 
                    cursus erat faucibus quis.
                </b>
                <b className="resText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean venenatis congue magna, luctus imperdiet ex 
                    imperdiet et. Interdum et malesuada fames ac ante ipsum 
                    primis in faucibus. Proin placerat dignissim metus. Nam 
                    vitae fringilla neque. Nunc rutrum neque lectus, convallis 
                    cursus erat faucibus quis.
                </b>
                <b className="eventText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean venenatis congue magna, luctus imperdiet ex 
                    imperdiet et. Interdum et malesuada fames ac ante ipsum 
                    primis in faucibus. Proin placerat dignissim metus. Nam 
                    vitae fringilla neque. Nunc rutrum neque lectus, convallis 
                    cursus erat faucibus quis.
                </b>
            </div>

            <div className="picsRight">
                <div className="picContain">
                    <img src={house1} alt="rez"></img>
                    <b>RESIDENTIAL</b>
                </div>

                <div className="picContain">
                    <img src={com} alt="rez"></img>
                    <b>COMMERCIAL</b>
                </div>

                <div className="picContain">
                    <img src={event} alt="event"></img>
                    <b>EVENTS</b>
                </div>
            </div>
        </div>
    );
  }
  
export default products;