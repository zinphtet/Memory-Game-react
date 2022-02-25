import React from "react";
import './CardList.css'
import CardItem from "../cardItem/CardItem";
import { useEffect ,useState} from "react";
const CartList = ({cards})=>{
    const [myCards,setCards] = useState(cards)
    useEffect(()=>{setCards(cards)},[cards])
    const clickHandle = (card)=>{
       const mapCards = myCards.map(mycard=>  mycard.id===card.id ? {...card,back:!card.back,front:!card.front} :{...mycard} )   
       setCards(mapCards)
}
    return(
        <div className="card_list">
            {myCards.map((card,i)=>{
                return <CardItem key={i} card={card} click={clickHandle} />
            })}
        </div>
    )

}

export default CartList;