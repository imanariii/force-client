import React, { useContext } from "react";
import { Api } from "../context/Api";
import AddToCard from "../utils/AddToCart";

const CardProduct = ({item, i}) => {
  const state = useContext(Api)
  return (
    <div className="card__wrapper" key={i}>
      <div className="card__body">
        <img src={state.address.slice(0, -3) + item.img} alt="" />
        <div>
          <span>{item.price}rub</span>
          <h3>{item.name}</h3>
          <button onClick={()=>{
              AddToCard(state, item.id)
          }}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CardProduct;