import React, { useEffect, useState } from "react";
import getStateKassa from "../utils/getStateKassa";
import { ButtonCardOrder, ModalOrder } from "./index";
import { Button } from "@mui/material";

const CardOrder = ({order, state, setOrders}) => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');
  const handleClickOpen = (scrollType) => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [status, setStatus] = useState('')
  useEffect(()=>{
    getStateKassa(state, order.paymentId, setStatus)
  }, [])
  return (
    <>
      <tr key={order.id}>
        <td>Заказ #{order.id} <Button id="btn" variant="contained" onClick={()=>{
          handleClickOpen('paper')
        }}>Подробнее</Button></td>
        <td className="modile-td">{order.price}₽</td>
        <td className="modile-td">{status}</td>
        <td className="modile-td order-btns"><ButtonCardOrder status={status} order={order} setOrders={setOrders} /></td>
      </tr>

     <ModalOrder open={open} scroll={scroll} handleClose={handleClose} order={order} status={status}/>
    </>
  )
}

export default CardOrder;