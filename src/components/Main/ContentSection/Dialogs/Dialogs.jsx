import React from 'react';
import dlg from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import MessageItem from './MessageItem/MessageItem.jsx';

const Dialogs = (props) => {
    const dialog = props.dialogsPage.dialogs.map(el => <DialogItem id={el.id} name={el.name} />);
    const message = props.dialogsPage.messages.map(el => <MessageItem id={el.id} message={el.message} />);

    const onSendMessage = () => {
        props.sendMessage();
    }
    
    const onMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessageBody(text);
    }

    return (
        <div className={dlg.dialog_items}>
            <div className={dlg.dialogs_block}>
                <ul className={dlg.dialogs}>
                    { dialog }
                </ul>
                <ul className={dlg.messages}>
                    { message }
                </ul>
            </div>
            <div className={dlg.textarea_block}>
                <textarea onChange={onMessageChange} placeholder='введите сообщение' value={props.dialogsPage.newMessageBody} />
                <button onClick={onSendMessage} className={dlg.button}>написать</button>
            </div>
        </div>
    )
}

export default Dialogs;
