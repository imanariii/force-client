import React, { useState, useEffect,useContext } from "react";
import {
  FormControlLabel,
  Radio,
  RadioGroup
} from "@mui/material";
import { FetchCreateProduct } from "../../utils/FetchCreateProduct";
import FetchGetAllCategorias from "../../utils/FetchGetAllCategorias";
import FetchGetAllBrands from "../../utils/FetchGetAllBrands";
import { Header, NavigationButtonsAdmin } from "../../components";
import '../../styles/adminpanel.css';
import { Api } from "../../context/Api";

const AddProducts = () => {
  const state = useContext(Api)

  const [values, setValues] = useState({
    name: '',
    price: 0,
    brand: null,
    category: null,
    file: null,
    // info: [{title:'The First',description: 'The Force'} ]
  });
  const [brands, setBrands] = useState([])
  const [categories, setCategories] = useState([])

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  }
  const selectFile = (e) => {
    setValues({...values, file: e.target.files[0]})
  }
  // const addInfo = () => {
  //   setValues({...values, info: [...values.info, {title: '', description: '', number: Date.now()}]})
  // }
  // const removeInfo = (number) => {
  //   setValues({...values, info: values.info.filter(i => i.number !== number)})
  // }
  // const changeInfo = (key, value, number) => {
  //   setValues({...values, info: values.info.map(i => i.number === number ? {...i, [key]: value} : i)})
  // }

  useEffect(() => {
    FetchGetAllBrands(setBrands, state)
    FetchGetAllCategorias(setCategories, state)
  }, [state])
  return (
    <>
      <Header />
      <main className={state.theme}>
        <NavigationButtonsAdmin value={'add-product'} />
        <section className="wrapper">
          <span>Добавить продукты</span>
          <input required={true} placeholder="Название продукта" onChange={handleChange('name')}></input>
          <input required={true} placeholder="Цена продукта" onChange={handleChange('price')}></input>
          <span id="brands">Выберите бренд</span>
          <RadioGroup
            row
            aria-labelledby="brands"
            name="brands"
          >
            {brands && brands.map(brand => (
              <FormControlLabel key={brand.id} value={brand.name} control={<Radio onClick={()=>setValues({...values, brand: brand.id})} />} label={brand.name} />
            ))}
          </RadioGroup>
          <span id="category">Выберите категорию</span>
          <RadioGroup
            row
            aria-labelledby="category"
            name="category"
          >
            {categories && categories.map(category => (
              <FormControlLabel key={category.id} value={category.name} control={<Radio onClick={()=>setValues({...values, category: category.id})} />} label={category.name} />
            ))}
          </RadioGroup>
          <span>Выберите изображение продукта:</span>
          <input
            type="file"
            name="file"
            onChange={selectFile}
            accept=".jpg, .jpeg, .png"
            multiple />
          {values.file && (
            <>
              <label htmlFor="file" width="50%"></label>
              <p>Выбраный файл:
                <img src={URL.createObjectURL(values.file)} alt="" width='50px' height='50px' />
              </p>
            </>
          )}



          {/*<button*/}
          {/*  onClick={addInfo}*/}
          {/*>*/}
          {/*  Добавить новое свойство*/}
          {/*</button>*/}
          {/*{values.info.map((item, i) =>*/}
          {/*  <Row className="mt-4" key={i}>*/}
          {/*    <Col md={4}>*/}
          {/*      <Form.Control*/}
          {/*        key={i}*/}
          {/*        value={item.title}*/}
          {/*        onChange={(e) => changeInfo('title', e.target.value, item.number)}*/}
          {/*        placeholder="Введите название свойства"*/}
          {/*      />*/}
          {/*    </Col>*/}
          {/*    <Col md={4}>*/}
          {/*      <Form.Control*/}
          {/*        key={i}*/}
          {/*        value={item.description}*/}
          {/*        onChange={(e) => changeInfo('description', e.target.value, item.number)}*/}
          {/*        placeholder="Введите описание свойства"*/}
          {/*      />*/}
          {/*    </Col>*/}
          {/*    <Col md={4}>*/}
          {/*      <button*/}
          {/*        onClick={() => removeInfo(item.number)}*/}
          {/*        variant='danger'*/}
          {/*      >*/}
          {/*        Удалить*/}
          {/*      </button>*/}
          {/*    </Col>*/}
          {/*  </Row>*/}
          {/*)}*/}
          <FetchCreateProduct values={values} setValues={setValues} />
        </section>
      </main>
      <Header />
    </>

  )
}

export default AddProducts;