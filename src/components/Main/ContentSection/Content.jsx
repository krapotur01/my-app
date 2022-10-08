import React from 'react';
import { Route, Routes } from "react-router-dom";
import cont from './Content.module.css';
import PageUpload from './PageUpload/PageUpload.jsx';
import DialogsContainer from './Dialogs/DialogsContainer';
import PagePostsContainer from './PagePosts/PagePostsContainer.jsx';

const Content = (props) => {
    // debugger

    return (
        <div className={cont.content}>
            <Routes>
                <Route path="/pageupload/*" element={<PageUpload />} />
                <Route path="/dialogs/*" element={<DialogsContainer store={props.store} />} />
                <Route path="/pageposts/*" element={<PagePostsContainer store={props.store} />} />
            </Routes>
        </div>
    )
}

export default Content;
