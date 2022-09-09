import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';

function Header ({cart}) {
    return (
        <header>
            <nav>
                <div className="nav-wrapper container">
                    <Link to="/"><h1>React Shop</h1></Link>
                    <Link to="/cart"><ShoppingCartOutlined style={{ fontSize: '32px' }} />
                        <span className="cart-length">{cart.length}</span>
                    </Link>

                </div>
            </nav>
        </header>
    )
}

export default Header;