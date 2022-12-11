import { Button, Input, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
import axios from "axios";
import { Api } from "../context/Api";

const ContentCategory = () => {
  const state = useContext(Api)
  const [values, setValues] = useState({
    name: ''
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  }
  const createCategory = async () => {
    await axios.post('http://localhost:5000/api/category', {name: values.name})
  }
  return (
    <>
      <h1>Внесение категории</h1>
      <div style={{display: "flex", gap: "1rem"}}>
        <Input placeholder="Название категории" onChange={handleChange('name')}></Input>
        <Button id="btn" onClick={createCategory}>Добавить</Button>
      </div>
      <h1>Все категории:</h1>
      { state.categories && state.categories.map(category => (
        <TextField
          key={category.id}
          label={`Название бренда №${category.id}`}
          defaultValue={category.name}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
      ))}
    </>
  )
}


export default ContentCategory;