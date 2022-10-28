import React from 'react';
import head from './Header.module.css';
import logo from './../../logo.svg';
import NavList from './NavList/NavList.jsx';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={head.header}>
            <img src={logo} alt="Логотип" className={head.logo} />
            <NavList />
            <div className={head.loginBlock}>
                { props.isAuth 
                    ? <NavLink to={'/login'}>{props.login}</NavLink> 
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header;
