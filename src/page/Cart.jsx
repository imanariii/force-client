import React from 'react';
import { Header, Footer, CartList} from "../components";

function Cart({cart, removeLastCart}) {
    return (
        <>
            <Header cart={cart}/>
            <main className="container cartWrapper">
                <h1>Cart List</h1>
                <CartList cart={cart} removeLastCart={removeLastCart}/>
                <h1>
                    <span>Total price:</span>
                    <span>{cart.reduce((total, item) => {return  total + item.price;}, 0)}  ₽</span>
                </h1>
            </main>
            <Footer />
        </>
    )
}

export default Cart;