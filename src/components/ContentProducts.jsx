// import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ContentProducts = () => {
  const [products, setProducts] = useState([]);
  const getProductAll = async () => {
    const {data} = await axios.get('http://localhost:5000/api/products')
    console.log(data)
    setProducts(data.rows)
  }
  useEffect(()=>{
    getProductAll()
  }, []);
  return (
    <>
      <h1>Добавить продукты</h1>
      {products.rows && products.rows.map(elem => (
        <h3>{elem}</h3>
      ))}
    </>
  )
}

export default ContentProducts;