import axios from "axios";
import React from "react";
import { Button } from "@mui/material";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import { useContext } from "react";
import { Api } from "../context/Api";

export function FetchCreateProduct({values, setValues}) {
  const state = useContext(Api)
  const axiosCreateProduct = async () => {
    const data = new FormData()
    data.append('name', values.name)
    data.append('price',  `${values.price}`)
    data.append('img', values.file)
    data.append('brandId', values.brand)
    data.append('categoryId', values.category)
    data.append('info', JSON.stringify(values.info))
    try {
      await axios.post('http://localhost:5000/api/products', data, {
        headers: {
          Authorization: 'Bearer ' + state.token
        }
      })
      setValues({
        name: '',
        price: 0,
        brand: null,
        category: null,
        file: null,
        info: [{title:'The First',description: 'The Force'} ]
      })
      state.notifySuc('Успешно')
    } catch (error) {
      console.log(error)
      if (typeof error.response.data.message === 'string') {
        state.notifyErr(error.response.data.message)
      } else {
        error.response.data.map(message=>state.notifyErr(message))
      }
    }
  }
  return (
    <Button sx={{width: 300}} component="label" variant="contained" startIcon={<AddCircleTwoToneIcon />}>
      Добавить продукт
      <input hidden accept="image/*" type="submit" onClick={()=>axiosCreateProduct()} />
    </Button>
  )
}