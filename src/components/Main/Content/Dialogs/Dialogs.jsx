import React from 'react';
import styles from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem.jsx';
import MessageItem from './MessageItem/MessageItem.jsx';

const Dialogs = (props) => {
    const dialog = props.dialogs.map(el => <DialogsItem id={el.id} key={el.id} name={el.name} />);
    const message = props.messages.map(el => <MessageItem id={el.id} key={el.id} message={el.message} />);

    // const onSendMessage = (values) => {
    //     props.sendMessage(values.newMessageBody);
    // }
    
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
            {/* <DialogsReduxForm onSubmit={onSendMessage}/> */}
        </div>
    )
}

// const DialogsForm = props => {
//     return (
//         <form onSubmit={props.handleSubmit} className={styles.textarea_block}>
//             {/* <Field name='newMessageBody' component='textarea' placeholder='введите сообщение' /> */}
//             <button className={styles.button}>написать</button>
//         </form>
//     )
// }

// const DialogsReduxForm = reduxForm({form: 'newMessageBody'}) (DialogsForm)

export default Dialogs;
