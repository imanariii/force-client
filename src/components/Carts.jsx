import { useContext } from "react";
import { Api } from "../context/Api";
import { Button, Drawer } from "@mui/material";
import { Image } from "react-bootstrap";
import RemoveToCart from "../utils/RemoveToCart";
import initKassa from "../utils/initKassa";
import React, { useState } from "react";
import axios from "axios";
import catGif from "../assets/error_cat.gif";
import '../styles/carts.css'
const Carts = () => {
  const state=useContext(Api)
  const [newOrderId, setNewOrderId]=useState(0);

  axios.get(`${state.address}/orders`).then(res=>{
    setNewOrderId(res.data[res.data.length-1].id+1);
  })

  let result = 0;
  state.cards.map((card)=>result+=card.price*card.count)

  const toggleDrawer = (prop) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    state.setCartsShowState(prop);
  };
  return (
    <Drawer
      anchor={'right'}
      open={state.cartsShowState}
      onClose={toggleDrawer(false)}
    >
      <div className="cart__wrapper">
        <div className="cart__body">
          <h1>Ваша корзина</h1>
          {state.cards.length > 0 ? (
            <table>
              <tr>
                <td>Изображение</td>
                <td>Название</td>
                <td>Цена</td>
                <td>Кол-во</td>
                <td></td>
              </tr>
              { state.cards.length > 0 && state.cards.map(item => (
                <tr key={item.id}>
                  <td className="img"><Image height='100px' width='100px' src={state.address.slice(0, -3) + item.img}/></td>
                  <td>{item.name}</td>
                  <td>{item.price}₽</td>
                  <td>{item.count}</td>
                  <td><Button onClick={()=>RemoveToCart(state, item.id)}>Удалить</Button> </td>
                </tr>
              ))}
              <tr>
                <td>Итого:</td>
                <td></td>
                <td>{ state.cards.length > 0 && result }₽</td>
                <td></td>
              </tr>
            </table>
          ): (
            <>
              <img width="80%" src={catGif} alt="Loading..." />
              <h3>Ваша корзина пуста</h3>
            </>
          )}

          {state.cards.length > 0 && state.user.address !== 'Адрес не задан' && (
            <Button id="btn" variant="contained" onClick={()=>{
              initKassa(state, result, newOrderId)
              state.setCartsShowState(false)
            }}>Оформить заказ</Button>
          )}
          <Button variant="contained" color="error" id="btn" onClick={()=>state.setCartsShowState(false)}>Закрыть</Button>
        </div>
      </div>
    </Drawer>
  )
}

export default Carts