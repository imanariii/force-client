import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Paper } from "@mui/material";
import { useContext, useEffect } from "react";
import { Api } from "../context/Api";
import { useState } from "react";
import axios from "axios";
import { ButtonCardOrder } from "./index";
import getStateKassa from "../utils/getStateKassa";

export default function ModalOrder({open, scroll, handleClose ,order}) {
  const state = useContext(Api)
  const [orderProducts, setOrderProducts] = useState([]);
  const [status, setStatus] = useState('')
  useEffect(()=>{
    getStateKassa(state, order.paymentId, setStatus)
    axios.get(`${state.address}/orders/${order.id}`)
      .then(function(res) {
        setOrderProducts(res.data.products)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Заказ #{order.id}</DialogTitle>
        <DialogContent dividers={scroll === 'paper'} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          {orderProducts.length > 0 && orderProducts.map(orderProduct => (
            <Paper elevation={3} style={{height:"150px", width: '100%', display: 'flex'}}>
              <img src={state.address.slice(0, -3) + orderProduct.img} alt="" height='100%' width='150px' />
              <div className="no-mobile">
                <span className="order-prop">{orderProduct.name}</span>
                <span className="order-prop">{orderProduct.price}₽</span>
                <span className="order-prop">{orderProduct.count}шт</span>
              </div>
              <div className="mobile">
                <span className="order-prop">{orderProduct.name}</span>
                <span className="order-prop">{orderProduct.price}₽</span>
                <span className="order-prop">{orderProduct.count}шт</span>
              </div>
            </Paper>
          ))}
          <span className="order-prop">Адрес: {order.address}</span>
          <span className="order-prop">Сумма заказа: {order.price}₽</span>
          <span className="order-prop">Статус заказа: {status}</span>
        </DialogContent>
        <DialogActions>
          <ButtonCardOrder status={status} />
          <Button onClick={handleClose}>Закрыть</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}