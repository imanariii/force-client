import axios from "axios";
import React from "react";
import { useContext } from "react";
import { Api } from "../context/Api";
import { Button } from "@mui/material";

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
    <Button variant="contained" id="btn" color="error" onClick={()=>axiosRemove()}><span>Удалить</span></Button>
  )
}