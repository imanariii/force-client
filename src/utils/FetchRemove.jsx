import axios from "axios";
import React from "react";
import { useContext } from "react";
import { Api } from "../context/Api";
import { useNavigate } from "react-router-dom";

export function FetchRemove({id}) {
  const context = useContext(Api)
  const axiosRemove = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`)
      context.notifySuc('Успешно')
    } catch (error) {
      console.log(error)
      if (typeof error.response.data.message === 'string') {
        context.notifyErr(error.response.data.message)
      } else {
        error.response.data.map(message=>context.notifyErr(message))
      }
    }
  }
  return (
    <button className="product-remove" onClick={()=>axiosRemove()}>Remove</button>
  )
}