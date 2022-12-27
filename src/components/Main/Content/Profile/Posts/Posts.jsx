import React from 'react';
import {Textarea} from './../../../../common/FormControls/FormControls';
import styles from './../Profile.module.css';
import PostItem from './PostItem/PostItem.jsx';
import { maxLengthCreator, required } from "../../../../../utilits/validate/validate";

const maxLength10 = maxLengthCreator(10);

const PostsForm = props => {
    return (
        <form className={styles.textarea_block} onSubmit={props.handleSubmit}>
            {/* <Field placeholder='введите сообщение' name='newPostText' component={Textarea} validate={[required, maxLength10]} /> */}
            <button className={styles.button}>написать</button>
        </form>
    )
}

// const PostsReduxForm = reduxForm({form: 'addMessage'}) (PostsForm);

const Posts = props => {
    const postRender = props.posts.map(el => <PostItem id={el.id} key={el.id} likeCount={el.likeCount} text={el.text} />)

    const addPostText = (values) => {
        props.addPost(values.newPostText);
    }

    return (  
        <div className={styles.posts_block}>
            {/* <PostsReduxForm onSubmit={addPostText} /> */}
            <section className={styles.posts}>
                { postRender }
            </section>
        </div>
    )
}

export default Posts;