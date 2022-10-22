import React from 'react';
import styles from './PostItem.module.css';

const PostItem = (props) => {
    return (  
        <article className={styles.post_block} id={props.id}>
            <div className={styles.user}>
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
