import React from 'react';
import post from './PagePosts.module.css';
import PostItem from './PostItem/PostItem.jsx';

const PagePosts = (props) => {
    const postRender = props.postsPage.postData.map(el => <PostItem id={el.id} likeCount={el.likeCount} name={el.name} text={el.text} />)

    const onAddPost = () => {
        props.addPost();
    }

    const onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
    }

    return (  
        <div className={post.posts_block}>
            <div className={post.textarea_block}>
                <textarea onChange={onPostChange} placeholder='введите сообщение' value={props.postsPage.newPostText} />
                <button onClick={onAddPost} className={post.button}>написать</button>
            </div>
            <section className={post.posts}>
                { postRender }
            </section>
        </div>
    )
}

export default PagePosts;
