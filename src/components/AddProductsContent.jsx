import React, { useState, useContext } from "react";
import {
  Button,
  FormControlLabel,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack
} from "@mui/material";
import {Form, Row, Col} from "react-bootstrap";
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import AddPhotoAlternateTwoToneIcon from '@mui/icons-material/AddPhotoAlternateTwoTone';
import { Api } from "../context/Api";
import axios from "axios";

const AddProductsContent = () => {
  const state = useContext(Api)
  const [values, setValues] = useState({
    name: '',
    price: 0,
    brand: null,
    category: null,
    file: null,
    info: [{title:'The First',description: 'The Force'} ]
  });
  console.log(values)
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  }
  const selectFile = (e) => {
    setValues({...values, file: e.target.files[0]})
  }
  const addInfo = () => {
    setValues({...values, info: [...values.info, {title: '', description: '', number: Date.now()}]})
  }
  const removeInfo = (number) => {
    setValues({...values, info: values.info.filter(i => i.number !== number)})
  }
  const changeInfo = (key, value, number) => {
    setValues({...values, info: values.info.map(i => i.number === number ? {...i, [key]: value} : i)})
  }
  const createProduct = async () => {
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
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1>Добавить продукты</h1>
      <Stack direction='column' align="center" spacing={2}>
        <Input required={true} placeholder="Название продукта" onChange={handleChange('name')}></Input>
        <Input required={true} placeholder="Цена продукта" onChange={handleChange('price')}></Input>
        <FormLabel id="brands">Выберите бренд</FormLabel>
        <RadioGroup
          row
          aria-labelledby="brands"
          name="brands"
        >
          {state.brands && state.brands.map(brand => (
            <FormControlLabel value={brand.name} control={<Radio onClick={()=>setValues({...values, brand: brand.id})} />} label={brand.name} />
          ))}
        </RadioGroup>
        <FormLabel id="category">Выберите категорию</FormLabel>
        <RadioGroup
          row
          aria-labelledby="category"
          name="category"
        >
          {state.categories && state.categories.map(category => (
            <FormControlLabel value={category.name} control={<Radio onClick={()=>setValues({...values, category: category.id})} />} label={category.name} />
          ))}
        </RadioGroup>
        <Button sx={{width: 300}} component="label" variant="outlined" startIcon={<AddPhotoAlternateTwoToneIcon />}>
          Загрузите картинку
          <input hidden accept="image/*" type="file" onChange={selectFile} />
        </Button>

        <Button
          onClick={addInfo}
        >
          Добавить новое свойство
        </Button>
        {values.info.map(i =>
          <Row className="mt-4" key={i.number}>
            <Col md={4}>
              <Form.Control
                value={i.title}
                onChange={(e) => changeInfo('title', e.target.value, i.number)}
                placeholder="Введите название свойства"
              />
            </Col>
            <Col md={4}>
              <Form.Control
                value={i.description}
                onChange={(e) => changeInfo('description', e.target.value, i.number)}
                placeholder="Введите описание свойства"
              />
            </Col>
            <Col md={4}>
              <Button
                onClick={() => removeInfo(i.number)}
                variant='danger'
              >
                Удалить
              </Button>
            </Col>
          </Row>
        )}
        <Button sx={{width: 300}} component="label" variant="contained" startIcon={<AddCircleTwoToneIcon />}>
          Добавить продукт
          <input hidden accept="image/*" type="submit" onClick={createProduct} />
        </Button>
      </Stack>
  </>
  )
}

export default AddProductsContent;