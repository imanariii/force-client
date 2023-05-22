import React, { useContext, useEffect, useState } from "react";
import getStateKassa from "../utils/getStateKassa";
import { Button } from "@mui/material";
import { ButtonCardOrder, ModalOrder } from "./index";
import { Api } from "../context/Api";
import axios from "axios";


const AdminPanelOrderCard = ({order, setOrders}) => {
  const state = useContext(Api)
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');
  const [userName, setUserName] = useState('')
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
    axios.get(`${state.address}/user/${order.userId}`)
      .then(function (res) {
        setUserName(res.data.email)
      })
      .catch(err => {
        console.log(err)
      })
  }, [state, order])
  return (
    <>
      <tr key={order.id}>
        <td>Заказ #{order.id} <Button id="btn" variant="contained" onClick={()=>{
          handleClickOpen('paper')
        }}>Подробнее</Button></td>
        <td>{userName}</td>
        <td className="modile-td">{order.price}₽</td>
        <td className="modile-td">{status}</td>
        <td className="modile-td order-btns"><ButtonCardOrder status={status} order={order} setOrders={setOrders} /></td>
      </tr>

      <ModalOrder open={open} scroll={scroll} handleClose={handleClose} order={order} status={status}/>
    </>
  )
}

export default AdminPanelOrderCard;