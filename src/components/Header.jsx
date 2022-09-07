import React from 'react';
import { Link } from 'react-router-dom';

function Header ({cart}) {
    return (
        <header>
            <nav className="teal lighten-1">
                <div className="nav-wrapper container">
                    <Link to="/cart" className="right text-decoration-none" >Корзина
                        <b>
                            ({cart.length})
                        </b>
                    </Link>
                    <Link to="/" className="brand-logo text-decoration-none">React Shop</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;