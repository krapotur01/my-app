import React from 'react';
import styles from './Posts.module.css';
import PostItem from './PostItem/PostItem.jsx';

const Posts = (props) => {
    const postRender = props.postData.map(el => <PostItem id={el.id} key={el.id} likeCount={el.likeCount} name={el.name} text={el.text} />)

    const onAddPostClick = () => {
        props.addPost();
    }

    const onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
    }

    return (  
        <div className={styles.posts_block}>
                <div className={styles.textarea_block}>
                    <textarea onChange={onPostChange} placeholder='введите сообщение' value={props.newPostText} />
                    <button onClick={onAddPostClick} className={styles.button}>написать</button>
                </div>
                <section className={styles.posts}>
                    { postRender }
                </section>
        </div>
    )
}

export default Posts;
