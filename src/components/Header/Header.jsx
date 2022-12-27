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
                    ? <div> {props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header;
