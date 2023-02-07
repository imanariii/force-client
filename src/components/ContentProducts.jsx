import React, { useContext } from "react";
import { Api } from "../context/Api";
import { Image } from "react-bootstrap";

const ContentProducts = () => {
  const state = useContext(Api)
  return (
    <>
      <h1>Все продукты:</h1>
      { state.products && state.products.rows.map(item => (
          <div key={item.id} className={`card card-${state.theme}`} style={{width: 150, cursor: 'pointer'}} border={state.theme}>
            <Image width={150} height={150} src={'http://localhost:5000/' + item.img}/>
            <div className="card-info">
              <div className="card-brand">Brand: {state.brands.map(brand=>brand.id === item.brandId ? brand.name : '')}</div>
              <div className="card-rating">
                Rating: {item.rating}
              </div>
              <div className="card-price">
                Price: {item.price}
              </div>
            </div>
            <div>Name: {item.name}</div>
          </div>
      ))}
    </>
  )
}

export default ContentProducts;