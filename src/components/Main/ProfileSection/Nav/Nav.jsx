import React from 'react';
import { NavLink } from 'react-router-dom';
import nav from './Nav.module.css';

const listLinks1 = [
    { to: '/friends', value: 'Friends', id: 1 },
    { to: '/dialogs', value: 'Dialogs', id: 2 },
    { to: '/posts', value: 'Page Posts', id: 3 },
    { to: '/users', value: 'Users', id: 4 },
    { to: '/profile/26405', value: 'Profile', id: 5 },
    { to: '/element3', value: 'Элемент 3', id: 6 }
]

const listLinks2 = [
    { to: '/element4', value: 'Элемент 4', id: 7 },
    { to: '/element5', value: 'Элемент 5', id: 8 },
    { to: '/element6', value: 'Элемент 6', id: 9 },
    { to: '/element7', value: 'Элемент 7', id: 10 },
    { to: '/element8', value: 'Элемент 8', id: 11 },
    { to: '/element9', value: 'Элемент 9', id: 12 }
]

const Nav = (props) => {
    const linkItem1 = listLinks1.map(el => <li key={el.id} className={nav.item}><NavLink to={el.to} >{el.value}</NavLink></li>)
    const linkItem2 = listLinks2.map(el => <li key={el.id} className={nav.item}><NavLink to={el.to} >{el.value}</NavLink></li>)

    return (
            <nav className={nav.nav}>
                <ul className={nav.list}>
                    { linkItem1 }
                </ul>

                <ul className={nav.list}>
                    { linkItem2 }
                </ul>
            </nav>          
    )
}

export default Nav;
