import React from 'react';
import { NavLink } from 'react-router-dom';
import nav from './Nav.module.css';

const listLinks1 = [
    { to: '/friends', value: 'Friends' },
    { to: '/dialogs', value: 'Dialogs' },
    { to: '/pageposts', value: 'Page Posts' },
    { to: '/element1', value: 'Элемент 1' },
    { to: '/element2', value: 'Элемент 2' },
    { to: '/element3', value: 'Элемент 3' }
]

const listLinks2 = [
    { to: '/element4', value: 'Элемент 4' },
    { to: '/element5', value: 'Элемент 5' },
    { to: '/element6', value: 'Элемент 6' },
    { to: '/element7', value: 'Элемент 7' },
    { to: '/element8', value: 'Элемент 8' },
    { to: '/element9', value: 'Элемент 9' }
]

const Nav = (props) => {
    const linkItem1 = listLinks1.map(el => <li className={nav.item}><NavLink to={el.to} >{el.value}</NavLink></li>)
    const linkItem2 = listLinks2.map(el => <li className={nav.item}><NavLink to={el.to} >{el.value}</NavLink></li>)

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
