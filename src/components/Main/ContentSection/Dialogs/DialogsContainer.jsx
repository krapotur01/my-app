import React from 'react';
import Dialogs from './Dialogs.jsx'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../../redux/dialogs-reducer.js';

const DialogsContainer = (props) => {
    const state = props.store.getState();
    const sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }
    
    const updateNewMessageBody = (text) => {
        props.store.dispatch(updateNewMessageBodyCreator(text));
    }

    return <Dialogs sendMessage={sendMessage} updateNewMessageBody={updateNewMessageBody} dialogsPage={state.dialogsPage} />
}

export default DialogsContainer;
