import React from 'react';
import CorrespondenceItem from './CorrespondenceItem/CorrespondenceItem';
import styles from './Correspondence.module.css';

const Correspondence = (props) => {
    const messageItemRender = props.messages.map(el => 
        <CorrespondenceItem 
            userName={el.userName} 
            message={el.message} 
            date={el.date} 
            country={el.country} 
            city={el.city} 
            key={el.id} />
    );

    const onSendMessageClick = () => {
        props.sendMessage();
    }
    
    const onMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessageBody(text);
    }

    return (
        <div className={styles.dialogs}>
            { messageItemRender }
            <div className={styles.textarea_block}>
                <textarea onChange={onMessageChange} placeholder='введите сообщение' value={props.newMessageBody} />
                <button onClick={onSendMessageClick} className={styles.button}>написать</button>
            </div>
        </div>
    )
}

export default Correspondence;