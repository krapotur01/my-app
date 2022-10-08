import React from 'react';
import { NavLink } from 'react-router-dom';
import dlg from './../Dialogs.module.css';

const DialogItem = (props) => {
    const path = `/dialogs/${props.id}`;

    return (  
        <li className={dlg.item}><NavLink to={path}>{props.name}</NavLink></li>
    )
}

export default DialogItem;
