import React, {useState} from 'react';
import {ModalWindow, ButtonDone, ButtonInfo} from './index';

function ShopCard({addNewCart, name, id, img, price, sliderimg, cart}) {
    const [visible, setVisible] = React.useState(false);
    const [modalCenter, setModalCenter] = useState(false);
    const [activeSlide, setActiveSlide] = React.useState(1);
    const count = 1;
    const selectActiveSlide = (i) => {
        setActiveSlide(i);
    }
    return (
        <>
        <div id={"product-" + id} className="card">
            <div className="card-content">
                <ButtonInfo setVisible={setVisible} />
            </div>
            <div>
                <img className="card-img" src={img} alt="" />
            </div>

            <div className="card-action">
                <ButtonDone id={id} addNewCart={addNewCart} name={name} img={img} price={price} cart={cart} count={count} />
            </div>
        </div>
            <ModalWindow
                visible={visible}
                setVisible={setVisible}
                activeSlide={activeSlide}
                modalCenter={modalCenter}
                setModalCenter={setModalCenter}
                setActiveSlide={setActiveSlide}
                selectActiveSlide={selectActiveSlide}
                addNewCart={addNewCart}
                name={name}
                id={id}
                price={price}
                img={img}
                cart={cart}
                sliderimg={sliderimg}
                />
        </>
    );
}

export default ShopCard;