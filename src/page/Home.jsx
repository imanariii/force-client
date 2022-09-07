import React from 'react';
import { Header, Sort, Footer} from "../components";

function Home({items, cart, addNewCart}) {
    const sortItems = ['По умолчанию', 'Цена по убывания', 'Цена по возрастанию'];
    return (
        <>
            <Header cart={cart} />
            <main className="container">
                <Sort items={items}
                      sortItems={sortItems}
                      addNewCart={addNewCart}
                />
            </main>
            <Footer />
        </>
    )
}

export default Home;