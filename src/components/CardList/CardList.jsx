import React from "react";
import './CardList.css'
import CardItem from "../cardItem/CardItem";

const CartList = ()=>{
    return(
        <div className="card_list">
            {new Array(12).fill(0).map(item=>{
                return <CardItem/>
            })}
        </div>
    )
}

export default CartList;