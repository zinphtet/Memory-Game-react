import React from "react";
import './CardItem.css'
import coverImg from '../../img/cover.jpg'
import css from '../../img/css.jpg'
const CardItem = ()=>{

    return (
        <div className="card initial-back">
              <img src={coverImg} alt="back img" className="cover-img"/>
             <img src={css} alt=" css img" className="main-img"/>
        </div>
    )
}
export default CardItem;