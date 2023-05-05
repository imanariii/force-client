import axios from "axios";
import React, { useContext } from "react";
import { Api } from "../context/Api";

const FetchCreateBrand = ({name, setFetching}) => {
  const state = useContext(Api)
  const axiosCreate = async () => {
  await axios.post(`http://localhost:5000/api/brand/`, {name: name}, {
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
    <button onClick={()=>axiosCreate()}>Добавить</button>
  )
}

export default FetchCreateBrand;