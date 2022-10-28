import React from 'react';
import nav from './NavList.module.css';
import { NavLink } from 'react-router-dom';

const menuList = [
    { id: 1, to: '/', value: 'Страница загрузки' },
    { id: 2, to: '/', value: 'Научиться учиться' },
    { id: 3, to: '/', value: 'Проект Место' },
    { id: 4, to: '/', value: 'Путишествие по России' },
    { id: 5, to: '/pageupload', value: 'Загрузчик' }
]

const navList = [
    { id: 1, to: '/1', value: 'Home' },
    { id: 2, to: '/2', value: 'About' },
    { id: 3, to: '/3', value: 'Contacts' }
]

const NavList = (props) => {
    const burgerMenuItem = menuList.map(el => <li key={el.id} className={nav.menu_item}><NavLink to={el.to}>{el.value}</NavLink></li>)
     
    const navItem = navList.map(el => 
        <li key={el.id} className={nav.item}>
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