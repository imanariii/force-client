import React, {useState} from 'react';

function ItemCart ({removeLastCart,product, setCart, setWarn}) {
    const [countCart, setCountCart] = useState(product.count);
    const newCountInc = countCart + 1;
    const newCountDec = countCart - 1;
    const incCount = () => {
        setCountCart(countCart + 1)
        setCart(cart =>
            cart.map(item =>
                item.id === product.id
                    ? { ...item, count: newCountInc }
                    : item
            )
        )
    }
    const decCount = () => {
        setCountCart(countCart - 1)
        setCart(cart =>
            cart.map(item =>
                item.id === product.id
                    ? { ...item, count: newCountDec }
                    : item
            )
        )
    }

    return (
        <>
        <div id={"product-" + product.id} className="cart">
            <div className="cart-image waves-effect waves-block waves-light">
                <img className="activator" src={product.img} alt="" />
            </div>
            <div className="cart-content">
                <span className="card-title activator">
                    <h5>{product.name}</h5>
                </span>
                <span>
                    <h4>Цена: {product.price} руб.</h4>
                </span>
                <div>
                    <button onClick={() => {
                        if (countCart===1) {
                            removeLastCart(product.id)

                        } else {
                            setWarn(false)
                            decCount()
                        }
                    }}>-</button>
                    <span>  { countCart }  </span>
                    <button onClick={()=>{
                        if (countCart===3) {
                            setWarn(true)
                        } else {
                            incCount()
                        }
                    }}>+</button>
                </div>
            </div>
            <div className="cart-action">
                <button className="btn-small" onClick={() => {
                    removeLastCart(product.id);
                }}><span>Удалить из корзины </span></button>
            </div>
        </div>
        </>
    );
}

export default ItemCart;