import React from 'react';
import styles from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem.jsx';
import MessageItem from './MessageItem/MessageItem.jsx';

const Dialogs = (props) => {
    const dialog = props.dialogs.map(el => <DialogsItem id={el.id} key={el.id} name={el.name} />);
    const message = props.messages.map(el => <MessageItem id={el.id} key={el.id} message={el.message} />);

    const onSendMessageClick = () => {
        props.sendMessage();
    }
    
    const onMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessageBody(text);
    }

    return (
        <div className={styles.dialog_items}>
            <div className={styles.dialogs_block}>
                <ul className={styles.dialogs}>
                    { dialog }
                </ul>
                <ul className={styles.messages}>
                    { message }
                </ul>
            </div>
            <div className={styles.textarea_block}>
                <textarea onChange={onMessageChange} placeholder='введите сообщение' value={props.newMessageBody} />
                <button onClick={onSendMessageClick} className={styles.button}>написать</button>
            </div>
        </div>
    )
}

export default Dialogs;
