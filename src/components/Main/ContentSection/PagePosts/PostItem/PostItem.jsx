import React from 'react';
import post from './PostItem.module.css';
import img from './../../../../../avatar.jpeg';

const PostItem = (props) => {
    return (  
        <article className={post.post_block} id={props.id}>
            <div className={post.user}>
                <img src={img} alt="Аватар" className={post.avatar} />
                <p className={post.user_name}>{props.name}</p>
            </div>
            <div className={post.text}> 
                <p className={post.post}>{props.text}</p>
                <span>Like: {props.likeCount}</span>
            </div>
        </article>
    )
}

export default PostItem;
