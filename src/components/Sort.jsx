import React, { useState } from 'react';
import {Sorting} from "./index";

function Sort ({items, sortItems, addNewCart, cart}) {
    const [filter, setFilter] = useState("");
    const [sortItem, setSortItem] = useState(sortItems[0]);
    return (
        <>
            <div className="filters--wrapper">
                    <div className="search-div filters--wrapper-item">
                        <div action="" method="post" className="search">
                            <input type="search"
                                   value={filter}
                                   onChange={(e) => setFilter(e.target.value)}
                                   id="filter"
                                   name="" placeholder="Поиск..." className="input"/>
                        </div>
                    </div>
                <div className="filters--wrapper-item">
                    { sortItems.map((sortItem, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setSortItem(sortItems[i])
                            }}
                            className="btn"
                        >
                            {sortItem}
                        </button>
                    ))}
                </div>
            </div>
            <div className="items-wrapper">
                Модели:
                <div className="items">
                    <Sorting sortItems={sortItems} sortItem={sortItem} items={items} filter={filter} addNewCart={addNewCart} cart={cart}/>
                </div>
            </div>
        </>
    );
}

export default Sort;