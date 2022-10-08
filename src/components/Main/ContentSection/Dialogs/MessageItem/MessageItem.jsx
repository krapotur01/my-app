import React from 'react';
import dlg from './../Dialogs.module.css';

const MessageItem = (props) => {
    return (
        <li className={dlg.item}>{props.message}</li> 
    )
}

export default MessageItem;
