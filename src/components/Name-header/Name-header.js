import React from "react";
import "./Name-header.css"

function NameHeader(){
    return(
        <div className="info-name-container">
            <h2 className="header-n">Name</h2>
            <h2 className="header-p">Price</h2>
            <h2 className="header-m">Marketcap</h2>
            <h2 className="header-v">Price Change (24hr)</h2>
            <h2 className="header-s">Circulating supply (number of coins)</h2>
        </div>
    )
}

export default NameHeader;