import React, { useEffect, useState } from "react";
import axios from "axios";
import Rodal from "rodal";
import 'rodal/lib/rodal.css';
import { ProductList } from "./index";
import FetchUpdateProduct from "../utils/FetchUpdateProduct";

const ContentProducts = () => {
  const [products, setProducts] = useState([])
  const [activeCard, setActiveCard] = useState({})
  const changeActiveCard = (e, line) => {
    switch (line) {
      case 'name':
        setActiveCard({...activeCard, name: e.target.value})
        break;
      case 'price':
        setActiveCard({...activeCard, price: e.target.value})
        break;
      case 'count':
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
      })
      .catch(err => {
        console.log(err)
      })

  }, [activeCard])
  return (
    <>
      <h1>Все продукты:</h1>
      <table>
        <tr>
          <td>Id</td>
          <td>Image</td>
          <td>Title</td>
          <td>Price</td>
          <td>Count</td>
          <td></td>
          <td></td>
        </tr>
        <ProductList props={{products, setActiveCard, setVisibleModal}} />
      </table>
      <Rodal
        visible={visibleModal}
        onClose={()=>setVisibleModal(false)}
        animation='door'
        height={400}>
        <div className="edit-modal__body">
          <h1>Изменение продукта</h1>
          <label htmlFor="name">Наименование товара</label>
          <input type="text" value={activeCard.name} name='name' onChange={e=>changeActiveCard(e, 'name')}/>
          <label htmlFor="price">Цена товара</label>
          <input type="text" value={activeCard.price} name='price' onChange={e=>changeActiveCard(e, 'price')}/>
          <label htmlFor="count">Количество товара на складе</label>
          <input type="text" value={activeCard.count} name='count' onChange={e=>changeActiveCard(e, 'count')}/>
          <FetchUpdateProduct values={activeCard} setProducts={setProducts}/>
        </div>
      </Rodal>
    </>
  )
}

export default ContentProducts;