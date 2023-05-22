import React from "react";
import { useEffect, useState } from "react";
import { CardOrder } from "./index";
import { useContext } from "react";
import { Api } from "../context/Api";
import FetchGetOrders from "../utils/FetchGetOrders";

const Orders = () => {
  const state = useContext(Api)
  const [orders, setOrders] = useState([])
  useEffect(()=>{
    FetchGetOrders(state, setOrders)
  }, [state, setOrders])
  useEffect(()=>{
    FetchGetOrders(state, setOrders)
  }, [state, orders])
  return (
    <div className="orders__wrapper">
      <h1>Ваши платежи</h1>
      <table>
        <tr>
          <td>№</td>
          <td className="order-price modile-td">Сумма заказа</td>
          <td className="modile-td">Статус</td>
          <td className="modile-td">Действия</td>
        </tr>
        { orders.length > 0 && orders.map(order => (
          <CardOrder order={order} state={state} setOrders={setOrders} />
        ))}
      </table>
    </div>
  )
}

export default Orders;