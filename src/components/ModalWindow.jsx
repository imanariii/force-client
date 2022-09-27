import React from 'react';
import {CloseOutlined, LeftOutlined, RightOutlined} from "@ant-design/icons";
import {ButtonDone} from './index';

function ModalWindow ({visible, setVisible, activeSlide, setActiveSlide, selectActiveSlide, name, price, addNewCart, id, sliderimg, img, cart, count}) {
    return (
        <>
        {visible && (
            <div className="wrapper-modal">
                <div className="modal">
                    <div className="modal-img">
                        <div className="slider">
                            <div className="slider-body">
                                <button onClick={() => {
                                    if (activeSlide===0) {
                                        setActiveSlide(4);
                                    } else {
                                        setActiveSlide(activeSlide - 1);
                                    }
                                }}>
                                    <LeftOutlined />
                                </button>
                                <img src={sliderimg[activeSlide]} alt="" />
                                <button onClick={() => {
                                    if (activeSlide===4) {
                                        setActiveSlide(0);
                                    } else {
                                        setActiveSlide(activeSlide + 1);
                                    }
                                }}>
                                    <RightOutlined />
                                </button>
                            </div>
                            <div className="img-btn">
                                    {sliderimg && sliderimg.map((slider, i) => (
                                                <button key={i} onClick={() => selectActiveSlide(i)}>
                                                    <img src={slider} alt="" />
                                                </button>
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div className="modal-info">
                        <div className="card-content">
                                <h1 className="modal-title">
                                    {name}
                                </h1>
                            <span>Men's size Japanese S or US 29 new with tags never worn Isamu Katayama Backlash blue Crash ripped jeans with black horse leather. The jeans are sold out everywhere and super cool right up there with Rick Owens and Julius.Men's size Japanese S or US 29 new with tags never worn Isamu Katayama Backlash blue Crash ripped jeans with black horse leather. The jeans are sold out everywhere and super cool right up there with Rick Owens and Julius.</span>
                            <h2>Цена: {price} руб.</h2>
                        </div>
                        <ButtonDone count={count} id={id} addNewCart={addNewCart} name={name} img={img} price={price} cart={cart} />
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
    )
}

export default ModalWindow;