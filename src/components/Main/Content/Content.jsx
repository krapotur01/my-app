import React from 'react';
import { Route, Routes } from "react-router-dom";
import styles from './Content.module.css';
import PageUpload from './PageUpload/PageUpload';
import DialogsContainer from './Dialogs/DialogsContainer';
import СorrespondenceContainer from './Dialogs/Сorrespondence/СorrespondenceContainer';
import PostsContainer from './Posts/PostsContainer';
import ProfileContainer from './Profile/ProfileContainer';
import UsersContainer from './Users/UsersContainer';

const Content = () => {
    return (
        <div className={styles.content}>
            <Routes>
                <Route path="/pageupload/*" element={<PageUpload />} />
                <Route path="/dialogs/*" element={<DialogsContainer />} />
                <Route path="/posts/*" element={<PostsContainer />} />
                <Route path="/profile/*" element={<ProfileContainer />} />
                <Route path="/correspondence" element={<СorrespondenceContainer />} />
                <Route path="/users" element={<UsersContainer />} />
            </Routes>
        </div>
    )
}

export default Content;
