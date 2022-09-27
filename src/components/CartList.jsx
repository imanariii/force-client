import React from 'react';
import {ItemCart} from "./index";

function CartList ({cart, removeLastCart, setCart, setWarn}) {
    return (
        <div className="items">
            {cart && cart
                .map((product) => (
                    <ItemCart key={product.id}
                              setWarn={setWarn}
                              product={product}
                              removeLastCart={removeLastCart}
                              count={product.count}
                              setCart={setCart}
                              cart={cart}
                    />
                    ))}
        </div>
    )
}

export default CartList;