import React, { useState, useEffect,useContext } from "react";
import FetchCreateBrand from "../../utils/FetchCreateBrand";
import FetchGetAllBrands from "../../utils/FetchGetAllBrands";
import { Header, NavigationButtonsAdmin } from "../../components";
import '../../styles/adminpanel.css';
import { Api } from "../../context/Api";
import { Button } from "@mui/material";
import FetchCreateCategory from "../../utils/FetchCreateCategory";
import FetchGetAllCategorias from "../../utils/FetchGetAllCategorias";

const Brands = () => {
  const state = useContext(Api)

  const [brands, setBrands] = useState([])
  const [newBrandName, setNewBrandName] = useState('');
  const [fetching, setFetching] = useState(true)
  const handleChange = (event) => {
    setNewBrandName(event.target.value);
  }
  const [categories, setCategories] = useState([])
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryDescription, setNewCategoryDescription] = useState('');

  const handleChangeName = (event) => {
    setNewCategoryName(event.target.value);
  }

  const handleChangeDescription = (event) => {
    setNewCategoryDescription(event.target.value);
  }

  useEffect(() => {
    FetchGetAllBrands(setBrands, state)
    FetchGetAllCategorias(setCategories, state)
    setFetching(false)
  }, [fetching])

  return (
    <>
      <Header />
      <main className={state.theme}>
        <NavigationButtonsAdmin value={'brands'} />
        <section className="wrapper">
          <span>Добавление нового бренда</span>
          <div style={{display: "flex", gap: "1rem"}}>
            <input placeholder="Название бренда" onChange={(e)=>handleChange(e)}></input>
            <FetchCreateBrand name={newBrandName} setFetching={setFetching} />
          </div>
          <span>Все бренды:</span>
          <table>
            <tr>
              <td>Id</td>
              <td>Наименование</td>
              <td>Действия</td>
            </tr>
            { brands && brands.map(brand => (
              <tr>
                <td>{brand.id}</td>
                <td>{brand.name}</td>
                <td>
                  <Button variant="contained" id="btn" color="error">Удалить</Button>
                </td>
              </tr>
            ))}
          </table>
          <span>Внесение категории</span>
          <div style={{display: "flex", gap: "1rem", flexWrap: 'wrap'}}>
            <input placeholder="Название категории" onChange={(e)=>handleChangeName(e)}></input>
            <input placeholder="Описание категории" onChange={(e)=>handleChangeDescription(e)}></input>
            <FetchCreateCategory setFetching={setFetching} name={newCategoryName} description={newCategoryDescription} />
          </div>
          <span>Все категории:</span>
          <table>
            <tr>
              <td>Id</td>
              <td>Наименование</td>
              <td>Описание</td>
              <td>Действия</td>
            </tr>
            { categories && categories.map(category => (
              <tr>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td>
                  <Button variant="contained" id="btn" color="error">Удалить</Button>
                </td>
              </tr>
            ))}
          </table>
        </section>
      </main>
      <Header />
    </>
  )
}

export default Brands;