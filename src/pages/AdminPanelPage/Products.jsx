import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Rodal from "rodal";
import 'rodal/lib/rodal.css';
import { Header, NavigationButtonsAdmin } from "../../components";
import FetchUpdateProduct from "../../utils/FetchUpdateProduct";
import { Image } from "react-bootstrap";
import FetchGetOneProduct from "../../utils/FetchGetOneProduct";
import { FetchRemove } from "../../utils/FetchRemove";
import '../../styles/adminpanel.css';
import { Api } from "../../context/Api";

const Products = () => {
  const state = useContext(Api)
  const [products, setProducts] = useState([])
  const [activeCard, setActiveCard] = useState({})
  const [fetching, setFetching] = useState(false)
  const changeActiveCard = (e, line) => {
    switch (line) {
      case 'name':
        setActiveCard({...activeCard, name: e.target.value})
        break;
      case 'price':
        setActiveCard({...activeCard, price: e.target.value})
        break;
      default:
        setActiveCard({...activeCard, count: e.target.value})
        break;
    }
  }
  const [visibleModal, setVisibleModal] = useState(false)

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/products`)
      .then(function(res) {
        axios.get(`http://localhost:5000/api/products?limit=${res.data.count}`)
          .then(function (res) {
            setProducts(res.data.rows)
          })
          .catch(err => {
            console.log(err)
          })
          .finally(()=>{
            setFetching(false)
          })
      })
      .catch(err => {
        console.log(err)
      })

  }, [fetching])
  return (
    <>
      <Header />
      <main className={state.theme}>
        <NavigationButtonsAdmin value={'products'} />
        <section className="wrapper products">
          <span>Все продукты:</span>
          <table>
            <tr>
              <td>Id</td>
              <td>Image</td>
              <td>Title</td>
              <td>Price</td>
              <td>Count</td>
              <td></td>
            </tr>
            { products.length > 0 && products.map(item => (
              <tr key={item.id}>
                <td> {item.id} </td>
                <td><Image height='50px' width='50px' src={'http://localhost:5000/' + item.img}/></td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.count}</td>
                <td className="products-btns">
                  <button className="edit-btn" onClick={()=>{
                    FetchGetOneProduct(item.id, setActiveCard)
                    setVisibleModal(true)
                  }}><span>Edit</span></button>
                  <FetchRemove id={item.id} setFetching={setFetching} />
                </td>
              </tr>
            ))}
          </table>
          <Rodal
            visible={visibleModal}
            onClose={()=>setVisibleModal(false)}
            animation='door'
            height={600}>
            <div className="wrapper">
              <span>Изменение продукта</span>
              <label htmlFor="name">Наименование товара</label>
              <input type="text" value={activeCard.name} name='name' onChange={e=>changeActiveCard(e, 'name')}/>
              <label htmlFor="price">Цена товара</label>
              <input type="text" value={activeCard.price} name='price' onChange={e=>changeActiveCard(e, 'price')}/>
              <label htmlFor="count">Количество товара на складе</label>
              <input type="text" value={activeCard.count} name='count' onChange={e=>changeActiveCard(e, 'count')}/>
              <FetchUpdateProduct values={activeCard} setProducts={setProducts}/>
            </div>
          </Rodal>
        </section>
      </main>
      <Header />
    </>
  )
}

export default Products;