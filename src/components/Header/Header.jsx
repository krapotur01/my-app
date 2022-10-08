import React from 'react';
import head from './Header.module.css';
import logo from './../../logo.svg';
import NavList from './NavList/NavList.jsx';

const Header = (props) => {
    return (
        <header className={head.header}>
            <img src={logo} alt="Логотип" className={head.logo} />
            <NavList />
        </header>
    )
}

export default Header;
