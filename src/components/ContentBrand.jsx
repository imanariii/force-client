import { Button, Input, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import FetchCreateBrand from "../utils/FetchCreateBrand";
import FetchGetAllBrands from "../utils/FetchGetAllBrands";

const ContentBrand = () => {
  const [brands, setBrands] = useState([])
  const [newBrandName, setNewBrandName] = useState('');

  const handleChange = (event) => {
    setNewBrandName(event.target.value);
  }

  useEffect(() => {
    FetchGetAllBrands(setBrands)
  }, [brands, newBrandName])

  return (
    <>
      <h1>Внесение бренда</h1>
      <div style={{display: "flex", gap: "1rem"}}>
        <Input placeholder="Название бренда" onChange={(e)=>handleChange(e)}></Input>
        <Button id="btn" onClick={()=>FetchCreateBrand(newBrandName)}>Добавить</Button>
      </div>
      <h1>Все бренды:</h1>
      { brands && brands.map(brand => (
        <TextField
          key={brand.id}
          label={`Название бренда №${brand.id}`}
          defaultValue={brand.name}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
      ))}
    </>
  )
}

export default ContentBrand;