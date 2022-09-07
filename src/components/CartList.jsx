import React from 'react';
import {ItemCart} from "./index";

function CartList ({cart, removeLastCart}) {
    return (
        <div className="items">
            {cart && cart
                .map((product) => (
                    <ItemCart key={product.id}
                              id={product.id}
                              name={product.name}
                              img={product.img}
                              price={product.price}
                              removeLastCart={removeLastCart}/>
                ))}
        </div>
    )
}

export default CartList;