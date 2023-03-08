import axios from "axios";
import React, { useContext } from "react";
import { Api } from "../context/Api";

export function FetchUpdateProduct({values, setProducts}) {
    const state = useContext(Api)
    const axiosUpdate = async () => {
      const data = new FormData()
      data.append('name', values.name)
      data.append('price',  values.price)
      data.append('count', values.count)
      try {
        await axios.patch(`http://localhost:5000/api/products/${values.id}`, data)
        state.notifySuc('Успешно')
      } catch (error) {
        console.log(error)
        if (typeof error.response.data.message === 'string') {
          state.notifyErr(error.response.data.message)
        } else {
          error.response.data.map(message=>state.notifyErr(message))
        }
      }
      axios.get(`http://localhost:5000/api/products`)
        .then(function(res) {
          axios.get(`http://localhost:5000/api/products?limit=${res.data.count}`)
            .then(function (res) {
              setProducts(res.data.rows)
            })
            .catch(err => {
              console.log(err)
            })
        })
        .catch(err => {
          console.log(err)
        })
    }
    return (
      <button onClick={()=>axiosUpdate()}>Сохранить изменения</button>
    )
}

export default FetchUpdateProduct