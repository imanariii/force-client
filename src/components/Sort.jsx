import React, { useState, useEffect } from 'react';
import {Sorting} from "./index";


function Sort ({items, sortItems, addNewCart}) {
    const [filter, setFilter] = useState("");
    const [sortItem, setSortItem] = useState('По умолчанию');
    return (
        <>
            <div className="filters--wrapper">
                <div className="filters--wrapper-item">
                    <label htmlFor="filter">Фильтрация моделей:</label>
                    <input
                        value={filter}
                        onChange={({ target: { value } }) => setFilter(value)}
                        id="filter"
                    />
                </div>
                <div className="filters--wrapper-item">
                    { sortItems.map((sortItem, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setSortItem(sortItems[i])
                            }}
                            className="waves-effect waves-block waves-light card"
                        >
                            {sortItems[i]}
                        </button>
                    ))}
                </div>
            </div>
            <div>
                Модели :
                <div className="items">
                    <Sorting sortItems={sortItems} sortItem={sortItem} items={items} filter={filter} addNewCart={addNewCart}/>
                </div>
            </div>
        </>
    );
}

export default Sort;