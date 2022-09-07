import React, {useState} from 'react';
import data from "./db.json";
import { Home, Cart} from './page';
import {
    Routes,
    Route
} from "react-router-dom";

import './index.css';

function App() {
    const [cart, setCart] = useState([]);
    const addNewCart = (elem) => {
        setCart([...cart, elem])
    }
    const removeLastCart = (id) => {
        setCart( cart.filter(item => item.id !== id))
    }
    return (
        <Routes>
            <Route path="/cart" element={
                <Cart cart={cart}
                      items={data.sneaks}
                      removeLastCart={removeLastCart}/>
            } />
            <Route path='/' element={
                <Home cart={cart}
                      items={data.sneaks}
                      addNewCart={addNewCart}/>
            } />

        </Routes>
    );
}

export default App;
