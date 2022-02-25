import React from "react";
import './CardList.css'
import CardItem from "../cardItem/CardItem";
import { useEffect ,useState} from "react";
const CartList = ({cards})=>{
    const [myCards,setCards] = useState(cards)
    const [twoCard , setTwoCard] = useState([])
    const [count , setCount]   = useState(0)
    useEffect(()=>{
        setCards(cards)
        setCount(0)
    },[cards])
    const clickHandle = (card)=>{
       const mapCards = myCards.map(mycard=> {
           if(mycard.id===card.id){
            setTwoCard((prev)=>{
                return [...prev,{...card,back:!card.back,front:!card.front}]
            })
            return{...card,back:!card.back,front:!card.front} 
           }
         else {
             return{...mycard}
             } 
       }) 
       setCards(mapCards)
}
if(twoCard.length===2){
    if(!(twoCard[0].src===twoCard[1].src)){
        setTimeout(() => {
            const firstMap = myCards.map(card=>card.id===twoCard[0].id?{...twoCard[0],front:false,back:true}:{...card})
            const secMap = firstMap.map(card =>card.id===twoCard[1].id?{...twoCard[1],front:false,back:true}:{...card})
            setCards(secMap)
        }, 500);  
    }
   setTwoCard([])
   setCount(prev=>prev+1)
}
    return(
        <div className="card_list">
            {myCards.map((card,i)=>{
                return <CardItem key={i} card={card} click={clickHandle}/>
            })}
            <div className="count">Total Count : <span>{count}</span></div>
        </div>
    )
}

export default CartList;