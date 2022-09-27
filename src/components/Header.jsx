import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';

function Header ({cart}) {
    return (
        <header>
            <nav>
                <div className="nav-wrapper container">
                    <Link to="/" className="logo">FORCE</Link>
                    <Link to="/cart"><ShoppingCartOutlined style={{ fontSize: '32px' }} />
                        <div className="cart-length">{cart.length}</div>
                    </Link>

                </div>
            </nav>
        </header>
    )
}

export default Header;