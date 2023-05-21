import axios from "axios";
import React, { useContext } from "react";
import { Api } from "../context/Api";
import { Button } from "@mui/material";

const FetchCreateBrand = ({name, setFetching}) => {
  const state = useContext(Api)
  const axiosCreate = async () => {
  await axios.post(`${state.address}/brand/`, {name: name}, {
    headers: {
      Authorization: 'Bearer ' + state.token
    }
  }).then((res) => {
    state.notifySuc('Успешно!')
  }).catch((res)=>{
    console.log(res)
    state.notifyErr(res.response.data.message)
  })
  setFetching(true)
  }
  return (
    <Button variant="contained" id="btn" color="success" onClick={()=>axiosCreate()}>Добавить</Button>
  )
}

export default FetchCreateBrand;