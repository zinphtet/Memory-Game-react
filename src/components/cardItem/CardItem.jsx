import React from "react";
import './CardItem.css'
import coverImg from '../../img/cover.jpg'
import { useState ,useEffect} from "react";
const CardItem = ({card ,click})=>{
       const  {src , back,front} = card;
        const cardClick = ()=>{
            click(card)
        }
    return (
        <div className={`card ${back? 'back':''} ${front?"front":''} `} onClick={cardClick}>
              <img src={coverImg} alt="back img" className="cover-img"/>
             <img src={src} alt=" css img" className="main-img"/>
        </div>
    )
}
export default CardItem;