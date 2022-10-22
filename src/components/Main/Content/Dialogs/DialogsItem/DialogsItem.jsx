import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './../Dialogs.module.css';

const DialogsItem = (props) => {
    return (  
        <li className={styles.item}><NavLink to="/correspondence">{props.name}</NavLink></li>
    )
}

export default DialogsItem;
