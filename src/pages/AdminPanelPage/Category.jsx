import React, { useState, useEffect } from "react";
import { AdminPanelOrderCard, Header, NavigationButtonsAdmin } from "../../components";
import '../../styles/adminpanel.css';
import { useContext } from "react";
import { Api } from "../../context/Api";
import FetchGetOrders from "../../utils/FetchGetOrders";

const Category = () => {
  const state = useContext(Api)
  const [orders, setOrders] = useState([])
  useEffect(()=>{
    FetchGetOrders(state, setOrders)
  }, [state])
  return (
    <>
      <Header />
      <main className={state.theme}>
        <NavigationButtonsAdmin value={'category'} />
        <section className="wrapper">
          <span>Все платежи:</span>
          <table>
            <tr>
              <td>Наименование</td>
              <td>Покупатель</td>
              <td className="modile-td">Сумма</td>
              <td className="modile-td">Статус заказа</td>
              <td className="modile-td">Действия</td>
            </tr>
            { orders && orders.map(order => (
              <AdminPanelOrderCard order={order} setOrders={setOrders} />
            ))}
          </table>
        </section>
      </main>
      <Header />
    </>

  )
}


export default Category;