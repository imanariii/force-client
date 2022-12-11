import { Button, Input, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
import axios from "axios";
import { Api } from "../context/Api";

const ContentBrand = () => {
  const state = useContext(Api)
  const [values, setValues] = useState({
    name: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  }
  const createBrand = async () => {
    await axios.post('http://localhost:5000/api/brand', {name: values.name})
  }
  return (
    <>
      <h1>Внесение бренда</h1>
      <div style={{display: "flex", gap: "1rem"}}>
        <Input placeholder="Название бренда" onChange={handleChange('name')}></Input>
        <Button id="btn" onClick={createBrand}>Добавить</Button>
      </div>
      <h1>Все бренды:</h1>
      { state.brands && state.brands.map(brand => (
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