import { Button, Input, TextField } from "@mui/material";
import React, {useState, useEffect} from "react"
import axios from "axios";

const ContentBrand = () => {
  const [values, setValues] = useState({
    name: '',
    brands: []
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  }
  const createBrand = async () => {
    await axios.post('http://localhost:5000/api/brand', {name: values.name})
  }
  useEffect(()=>{
    const getAllBrands = () => {
      axios.get('http://localhost:5000/api/brand')
        .then(function (res) {
          setValues({...values, brands: res.data})
        })
        .catch(err => {
          console.log(err)
        })
    }
    getAllBrands()
  }, [])
  return (
    <>
      <h1>Внесение бренда</h1>
      <div style={{display: "flex", gap: "1rem"}}>
        <Input placeholder="Название бренда" onChange={handleChange('name')}></Input>
        <Button id="btn" onClick={createBrand}>Добавить</Button>
      </div>
      <h1>Все бренды:</h1>
      { values.brands && values.brands.map(brand => (
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