import React from 'react';
import { Header, Sort, Footer} from "../components";
import { ArrowDownOutlined, ArrowUpOutlined, RedoOutlined } from '@ant-design/icons';

function Home({items, cart, addNewCart}) {
    const sortItems = [ <RedoOutlined style={{ fontSize: '16px' }} />, <ArrowDownOutlined style={{ fontSize: '16px' }} />, <ArrowUpOutlined style={{ fontSize: '16px' }} />];
    return (
        <>
            <Header cart={cart} />
            <main className="container">
                <Sort items={items}
                      sortItems={sortItems}
                      addNewCart={addNewCart}
                      cart={cart}
                />
            </main>
            <Footer />
        </>
    )
}

export default Home;