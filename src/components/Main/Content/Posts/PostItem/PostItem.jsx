import React from 'react';
import styles from './PostItem.module.css';
import img from './../../../../../avatar.jpeg';

const PostItem = (props) => {
    return (  
        <article className={styles.post_block} id={props.id}>
            <div className={styles.user}>
                <img src={img} alt="Аватар" className={styles.avatar} />
                <p className={styles.user_name}>{props.name}</p>
            </div>
            <div className={styles.text}> 
                <p className={styles.post}>{props.text}</p>
                <span>Like: {props.likeCount}</span>
            </div>
        </article>
    )
}

export default PostItem;
