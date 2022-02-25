import React from "react";

import './Header.css'

const Header =({suffleClick})=>{
    return <div className="header">
        <p className="title">Memory Game</p>
        <button className="btn" onClick={suffleClick}>Restart</button>
    </div>
}
export default Header;