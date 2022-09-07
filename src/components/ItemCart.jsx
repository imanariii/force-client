import React from 'react';

function ItemCart ({removeLastCart, name, id, img, price}) {
    return (
        <div id={"product-" + id} className="cart">
            <div className="cart-image waves-effect waves-block waves-light">
                <img className="activator" src={img} alt="" />
            </div>
            <div className="cart-content">
                <span className="card-title activator">
                    <h5>{name}</h5>
                </span>
                <span>
                    <h4>Цена: {price} руб.</h4>
                </span>
            </div>
            <div className="cart-action">
                <button className="btn-small" onClick={() => {
                    removeLastCart(id);
                }}><span>Удалить из корзины </span></button>
            </div>
        </div>
    );
}

export default ItemCart;