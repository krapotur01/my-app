import React from 'react';
import PagePosts from './PagePosts.jsx';
import { addPostCreator, updateNewPostTextCreator } from '../../../../redux/posts-reducer.js';

const PagePostsContainer = (props) => {
    const state = props.store.getState();
    const addPost = () => {
        props.store.dispatch(addPostCreator());
    }

    const updateNewPostText = (text) => {
        props.store.dispatch(updateNewPostTextCreator(text));
    }

    return <PagePosts addPost={addPost} updateNewPostText={updateNewPostText}  postsPage={state.postsPage} />
}

export default PagePostsContainer;
