import React, { useState, useEffect,useContext } from "react";
import FetchCreateBrand from "../../utils/FetchCreateBrand";
import FetchGetAllBrands from "../../utils/FetchGetAllBrands";
import { Header, NavigationButtonsAdmin } from "../../components";
import '../../styles/adminpanel.css';
import { Api } from "../../context/Api";

const Brands = () => {
  const state = useContext(Api)

  const [brands, setBrands] = useState([])
  const [newBrandName, setNewBrandName] = useState('');
  const [fetching, setFetching] = useState(true)
  const handleChange = (event) => {
    setNewBrandName(event.target.value);
  }

  useEffect(() => {
    FetchGetAllBrands(setBrands, state)
    setFetching(false)
  }, [fetching, state])

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

export default Brands;