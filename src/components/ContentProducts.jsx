import React, { useContext } from "react";
import { Api } from "../context/Api";
import { Image } from "react-bootstrap";

const ContentProducts = () => {
  const state = useContext(Api)
  return (
    <>
      <h1>Все продукты:</h1>
      <table>
        <tr>
          <td>Id</td>
          <td>Image</td>
          <td>Title</td>
          <td>Price</td>
          <td>Rating</td>
          <td></td>
          <td></td>
        </tr>
      { state.products && state.products.rows.map(item => (
          <tr>
            <td> {item.id} </td>
            <td><Image height='50px' width='50px' src={'http://localhost:5000/' + item.img}/></td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.rating}</td>
            <td><button className="product-edit">Edit</button></td>
            <td><button className="product-remove">Remove</button></td>
          </tr>
      ))}
      </table>
    </>
  )
}

export default ContentProducts;