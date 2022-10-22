import React from 'react';
import styles from './../Dialogs.module.css';

const MessageItem = (props) => {
    return (
        <li className={styles.item}>{props.message}</li> 
    )
}

export default MessageItem;
