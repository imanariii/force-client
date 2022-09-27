import React from 'react';
import {ShopCard} from "./index";


function Sorting({sortItem, items, filter, addNewCart, sortItems, cart }) {
    switch (sortItem) {
        case sortItems[1]:
            return (
                <>
                    {items.sort((a, b) => {
                        return  b.price - a.price;
                    })
                        .filter((product) => product.name.toLowerCase().includes(filter.toLowerCase()))
                        .map((product) => (
                                <ShopCard key={product.id}
                                          cart={cart}
                                          id={product.id}
                                          name={product.name}
                                          img={product.img}
                                          price={product.price}
                                          addNewCart={addNewCart}
                                          sliderimg={product.sliderimg}/>
                        ))}
                </>
            )
        case sortItems[2]:
            return (
                <>
                    {items.sort((a, b) => {
                        return  a.price - b.price;
                    })
                        .filter((product) => product.name.toLowerCase().includes(filter.toLowerCase()))
                        .map((product) => (
                                    <ShopCard key={product.id}
                                              cart={cart}
                                              id={product.id}
                                              name={product.name}
                                              img={product.img}
                                              price={product.price}
                                              addNewCart={addNewCart}
                                              sliderimg={product.sliderimg}
                                    />
                        ))}
                </>
            )
        default:
            return (
                <>
                    {items.sort((a, b) => {
                        return a.id - b.id;
                    })
                        .filter((product) => product.name.toLowerCase().includes(filter.toLowerCase()))
                        .map((product) => (
                                    <ShopCard key={product.id}
                                              cart={cart}
                                              id={product.id}
                                              name={product.name}
                                              img={product.img}
                                              price={product.price}
                                              addNewCart={addNewCart}
                                              sliderimg={product.sliderimg}
                                    />
                        ))}
                </>
            )
    }
}

export default Sorting;