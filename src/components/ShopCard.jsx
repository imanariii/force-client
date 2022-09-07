import React from 'react'

function ShopCard({addNewCart, name, id, img, price}) {
    return (
        <div id={"product-" + id} className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={img} alt="" />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {name}
                </span>
                <p>Цена: {price} руб.</p>
            </div>
            <div className="card-action">
                <button className="btn-small" onClick={() => {
                    addNewCart({id, name, price, img});
                }}>Добавить товар в корзину</button>
            </div>
        </div>
    );
}

export default ShopCard;