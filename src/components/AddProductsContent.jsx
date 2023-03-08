import React, { useState, useEffect } from "react";
import {
  Button,
  FormControlLabel,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack
} from "@mui/material";
import { FetchCreateProduct } from "../utils/FetchCreateProduct";
import {Form, Row, Col} from "react-bootstrap";
import AddPhotoAlternateTwoToneIcon from '@mui/icons-material/AddPhotoAlternateTwoTone';
import FetchGetAllCategorias from "../utils/FetchGetAllCategorias";
import FetchGetAllBrands from "../utils/FetchGetAllBrands";

const AddProductsContent = () => {
  const [values, setValues] = useState({
    name: '',
    price: 0,
    brand: null,
    category: null,
    file: null,
    info: [{title:'The First',description: 'The Force'} ]
  });
  const [brands, setBrands] = useState([])
  const [categories, setCategories] = useState([])

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

  useEffect(() => {
    FetchGetAllBrands(setBrands)
    FetchGetAllCategorias(setCategories)
  }, [values])
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
          {brands && brands.map(brand => (
            <FormControlLabel key={brand.id} value={brand.name} control={<Radio onClick={()=>setValues({...values, brand: brand.id})} />} label={brand.name} />
          ))}
        </RadioGroup>
        <FormLabel id="category">Выберите категорию</FormLabel>
        <RadioGroup
          row
          aria-labelledby="category"
          name="category"
        >
          {categories && categories.map(category => (
            <FormControlLabel key={category.id} value={category.name} control={<Radio onClick={()=>setValues({...values, category: category.id})} />} label={category.name} />
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
        {values.info.map((item, i) =>
          <Row className="mt-4" key={i}>
            <Col md={4}>
              <Form.Control
                key={i}
                value={item.title}
                onChange={(e) => changeInfo('title', e.target.value, item.number)}
                placeholder="Введите название свойства"
              />
            </Col>
            <Col md={4}>
              <Form.Control
                key={i}
                value={item.description}
                onChange={(e) => changeInfo('description', e.target.value, item.number)}
                placeholder="Введите описание свойства"
              />
            </Col>
            <Col md={4}>
              <Button
                onClick={() => removeInfo(item.number)}
                variant='danger'
              >
                Удалить
              </Button>
            </Col>
          </Row>
        )}
        <FetchCreateProduct values={values} setValues={setValues} />
      </Stack>
  </>
  )
}

export default AddProductsContent;