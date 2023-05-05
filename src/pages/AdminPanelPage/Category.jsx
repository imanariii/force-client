import React, { useState, useEffect } from "react";
import FetchCreateCategory from "../../utils/FetchCreateCategory";
import FetchGetAllCategorias from "../../utils/FetchGetAllCategorias";
import { Header, NavigationButtonsAdmin } from "../../components";
import '../../styles/adminpanel.css';
import { useContext } from "react";
import { Api } from "../../context/Api";

const Category = () => {
  const state = useContext(Api)

  const [categories, setCategories] = useState([])
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryDescription, setNewCategoryDescription] = useState('');
  const [fetching, setFetching] = useState(true)

  const handleChangeName = (event) => {
    setNewCategoryName(event.target.value);
  }

  const handleChangeDescription = (event) => {
    setNewCategoryDescription(event.target.value);
  }

  useEffect(()=>{
    FetchGetAllCategorias(setCategories, state)
    setFetching(false)
  }, [fetching, state])
  return (
    <>
      <Header />
      <main className={state.theme}>
        <NavigationButtonsAdmin value={'category'} />
        <section className="wrapper">
          <h1>Внесение категории</h1>
          <div style={{display: "flex", gap: "1rem"}}>
            <input placeholder="Название категории" onChange={(e)=>handleChangeName(e)}></input>
            <input placeholder="Описание категории" onChange={(e)=>handleChangeDescription(e)}></input>
            <FetchCreateCategory setFetching={setFetching} name={newCategoryName} description={newCategoryDescription} />
          </div>
          <h1>Все категории:</h1>
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
                  <button className="edit-btn">Edit</button>
                  <button className="remove-btn">Remove</button>
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


export default Category;