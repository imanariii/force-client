import axios from "axios";
import React from "react";
import { useContext } from "react";
import { Api } from "../context/Api";

export function FetchRemove({id, setFetching}) {
  const context = useContext(Api)
  const axiosRemove = async () => {
    try {
      await axios.delete(`${context.address}/products/${id}`)
      setFetching(true)
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
    <button className="remove-btn" onClick={()=>axiosRemove()}><span>Remove</span></button>
  )
}