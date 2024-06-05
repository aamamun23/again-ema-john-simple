import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div><img src={logo} alt="" /></div>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order-review">Order review</a>
                <a href="/inventory-management">Inventory Management</a>
            </nav>
        </header>
    );
};

export default Header;