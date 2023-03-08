import { Image } from "react-bootstrap";
import FetchGetOneProduct from "../utils/FetchGetOneProduct";
import { FetchRemove } from "../utils/FetchRemove";
import React from "react";

const ProductList = ({props}) => {
  const { setActiveCard, setVisibleModal, products } = props;
  return (
    <>
      { products.length > 0 && products.map(item => (
        <tr key={item.id}>
          <td> {item.id} </td>
          <td><Image height='50px' width='50px' src={'http://localhost:5000/' + item.img}/></td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.count}</td>
          <td><button className="product-edit" onClick={()=>{
            FetchGetOneProduct(item.id, setActiveCard)
            setVisibleModal(true)
          }}>Edit</button></td>
          <td><FetchRemove id={item.id} /> </td>
        </tr>
      ))}
    </>
  )
}

export default ProductList