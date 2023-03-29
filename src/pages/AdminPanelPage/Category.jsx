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
  const [fetching, setFetching] = useState(true)

  const handleChange = (event) => {
    setNewCategoryName(event.target.value);
  }

  useEffect(()=>{
    FetchGetAllCategorias(setCategories)
    setFetching(false)
  }, [fetching])
  return (
    <>
      <Header />
      <main className={state.theme}>
        <NavigationButtonsAdmin value={'category'} />
        <section className="wrapper">
          <h1>Внесение категории</h1>
          <div style={{display: "flex", gap: "1rem"}}>
            <input placeholder="Название категории" onChange={(e)=>handleChange(e)}></input>
            <FetchCreateCategory setFetching={setFetching} name={newCategoryName} />
          </div>
          <h1>Все категории:</h1>
          <table>
            <tr>
              <td>Id</td>
              <td>Наименование</td>
              <td>Действия</td>
            </tr>
            { categories && categories.map(category => (
              <tr>
                <td>{category.id}</td>
                <td>{category.name}</td>
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