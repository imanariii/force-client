import React from 'react';
import { Link } from 'react-router-dom';
import { CloseOutlined } from "@ant-design/icons";

function ShopCard({addNewCart, name, id, img, price}) {
    const [visible, setVisible] = React.useState(false);
    return (
        <>
        <div id={"product-" + id} className="card">
            <div>
                <img className="card-img" src={img} alt="" />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {name}
                </span>
            </div>
            <div className="card-action">
                    <button
                        className="card-btn"
                        onClick={() => {
                            setVisible(true);
                        }}>
                        Заказать
                    </button>
            </div>
        </div>
            {visible && (
                <div className="wrapper-modal">
                    <div className="modal">
                        <div className="modal-img">
                            <img src={img} alt="" />
                        </div>
                        <div className="modal-info">
                            <div className="card-content">
                                <span className="modal-title">
                                    {name}
                                </span>
                                <p>Цена: {price} руб.</p>
                            </div>
                            <Link to="/cart">
                                <button
                                    className="card-btn"
                                    onClick={() => {
                                        addNewCart({id, name, price, img});
                                    }}>
                                    Добавить товар в корзину
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="close-modal">
                        <button onClick={
                            ()  => {
                            setVisible(false);
                        }}>
                        <CloseOutlined />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ShopCard;