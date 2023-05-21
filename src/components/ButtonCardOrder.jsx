import { Button } from "@mui/material";
import { useContext } from "react";
import { Api } from "../context/Api";
import cancelOrder from "../utils/cancelOrder";
import FetchGetOrders from "../utils/FetchGetOrders";

const ButtonCardOrder = ({status, order, setOrders}) => {
  const state = useContext(Api)
  switch (status) {
    case 'Платеж не оплачен':
      return (
        <>
          <Button id="btn" color="success" variant="contained" onClick={()=>window.open(order.paymentUrl)}>Оплатить</Button>
          <Button id="btn" color="error" variant="contained" onClick={()=>{
            cancelOrder(state, order)
            FetchGetOrders(state, setOrders)
            state.notifySuc('Платеж отменён')
          }}>Отменить</Button>
        </>
      )
    case 'Время оплаты истекло':
      return (
        <Button color="error" onClick={()=>{
          cancelOrder(state, order)
          FetchGetOrders(state, setOrders)
          state.notifySuc('Платеж отменён')
        }}>Отменить</Button>
      )
  }
}

export default ButtonCardOrder;