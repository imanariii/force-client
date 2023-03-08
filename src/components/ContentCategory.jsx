import { Button, Input, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import FetchCreateCategory from "../utils/FetchCreateCategory";
import FetchGetAllCategorias from "../utils/FetchGetAllCategorias";

const ContentCategory = () => {
  const [categories, setCategories] = useState([])
  const [newCategoryName, setNewCategoryName] = useState('');

  const handleChange = (event) => {
    setNewCategoryName(event.target.value);
  }

  useEffect(()=>{
    FetchGetAllCategorias(setCategories)
  }, [categories, newCategoryName])
  return (
    <>
      <h1>Внесение категории</h1>
      <div style={{display: "flex", gap: "1rem"}}>
        <Input placeholder="Название категории" onChange={(e)=>handleChange(e)}></Input>
        <Button id="btn" onClick={()=>FetchCreateCategory(newCategoryName)}>Добавить</Button>
      </div>
      <h1>Все категории:</h1>
      { categories && categories.map(category => (
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