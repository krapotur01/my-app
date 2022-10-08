import React from 'react';
import nav from './NavList.module.css';
import { NavLink } from 'react-router-dom';

const menuList = [
    { to: '/', value: 'Страница загрузки' },
    { to: '/', value: 'Научиться учиться' },
    { to: '/', value: 'Проект Место' },
    { to: '/', value: 'Путишествие по России' },
    { to: '/pageupload', value: 'Загрузчик' }
]

const navList = [
    { to: '/1', value: 'Home' },
    { to: '/2', value: 'About' },
    { to: '/3', value: 'Contacts' }
]

const NavList = (props) => {
    const burgerMenuItem = menuList.map(el => <li className={nav.menu_item}><NavLink to={el.to}>{el.value}</NavLink></li>)
     
    const navItem = navList.map(el => 
        <li className={nav.item}>
            <NavLink to={el.to} className={(navData => navData.isActive ? nav.active : nav.link)}>{el.value}</NavLink>
        </li>
    );
    
    return (
        <ul className={nav.navList}>
            { navItem }

            <li className={`${nav.item} ${nav.drop_menu}`}>
                <NavLink to={'/4'} className={(navData => navData.isActive ? nav.active : nav.link)}>Другие проекты</NavLink>

                <ul className ={nav.menu}> 
                    { burgerMenuItem } 
                </ul>
            </li>
        </ul>
    )
}

export default NavList;