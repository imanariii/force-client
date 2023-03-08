import React, { useContext } from "react";
import { Api } from "../context/Api";
import FetchGetOneProduct from "../utils/FetchGetOneProduct";

const CardProduct = ({item, i}) => {
  const state = useContext(Api)
  return (
    <div className="card__wrapper" key={i}>
      <div className="card__body">
        <img src={'http://localhost:5000/' + item.img} alt="" />
        <div>
          <span>{item.price}rub</span>
          <h3>{item.name}</h3>
          <button onClick={()=>{
            if(state.cards.length < 5) {
              FetchGetOneProduct(item.id, state.setCards, state.cards)
              state.notifySuc('Товар добавлен в корзину')
            }else {
              state.notifyErr('Максимальное кол-во товаров в корзине 5шт')
            }
          }}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CardProduct;