import React from 'react';
import { Route, Routes } from "react-router-dom";
import styles from './Content.module.css';
import PageUpload from './PageUpload/PageUpload';
import DialogsContainer from './Dialogs/DialogsContainer';
import CorrespondenceContainer from './Dialogs/Correspondence/CorrespondenceContainer';
import PostsContainer from './Posts/PostsContainer';
import ProfileContainer from './Profile/ProfileContainer';
import UsersContainer from './Users/UsersContainer';
import Login from './Login/Login';

const Content = () => {
    return (
        <div className={styles.content}>
            <Routes>
                <Route path="/pageupload/*" element={<PageUpload />} />
                <Route path="/dialogs/*" element={<DialogsContainer />} />
                <Route path="/posts/*" element={<PostsContainer />} />
                <Route path="/profile/:userId" element={<ProfileContainer />} />
                <Route path="/correspondence" element={<CorrespondenceContainer />} />
                <Route path="/users" element={<UsersContainer />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default Content;
