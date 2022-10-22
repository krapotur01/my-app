import React from 'react';
import styles from './UsersItem.module.css';

const UsersItem = (props) => {
    return (
        <div className={styles.dialogs__item}>
            <div className={styles.img_follow_block}>
                <img src={props.userPhoto} alt='Аватар' className={styles.avatar} />
                <button className={styles.follow}>Follow</button>
            </div>
            <div className={styles.message_block}>
                <div className={styles.message_main}>
                    <p className={styles.name_user}>{props.fullName}</p>
                    <p className={styles.message}>{props.status}</p>
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

export default UsersItem;