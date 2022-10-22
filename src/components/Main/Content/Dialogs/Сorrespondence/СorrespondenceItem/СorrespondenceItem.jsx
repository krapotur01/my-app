import React from 'react';
import styles from './СorrespondenceItem.module.css';
import avatar from './../../../../../../assets/images/avatar.png';

const СorrespondenceItem = (props) => {
    return (
        <div className={styles.dialogs__item}>
            <div className={styles.img_follow_block}>
                <img src={avatar} alt='Аватар' />
                <button className={styles.follow}>Follow</button>
            </div>
            <div className={styles.message_block}>
                <div className={styles.message_main}>
                    <p className={styles.name_user}>{props.userName}</p>
                    <p className={styles.message}>{props.message}</p>
                    <span className={styles.date}>{props.date}</span>
                </div>
                <div className={styles.location}>
                    <p className={styles.country}>{props.country}</p>
                    <p className={styles.capital}>{props.city}</p>
                </div>
            </div>
        </div>
    )
}

export default СorrespondenceItem;