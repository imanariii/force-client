import React, {useState} from 'react';
import { Header, Footer, CartList} from "../components";

function Cart({cart, removeLastCart, setCart}) {
    const [warn, setWarn] = useState(false);
    return (
        <>
            <Header cart={cart}/>
            <main className="container cartWrapper">
                <div className="title">Ваша корзина</div>
                <div className={warn ? (`display-block warn`) : (`display-none warn`)}><h3>Максимальное кол-во 3!</h3></div>
                <CartList cart={cart} removeLastCart={removeLastCart} setCart={setCart} setWarn={setWarn}/>
                <div className="total">
                    <span>Итоговая цена:</span>
                    <span>{cart.reduce((total, item) => {
                        return  total + (item.price*item.count);}, 0)
                    }  ₽</span>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Cart;