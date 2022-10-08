import React from 'react';
import btns from './Buttons.module.css';
import Download from './DownloadComp/Download.jsx';
import Upload from './UploadComp/Upload.jsx';
import Appeal from './Appeal/Appeal.jsx';

const Buttons = (props) => {
    return (
        <section className={btns.form}>
            <Download />
            <Upload />
            <Appeal />
        </section> 
    );
}

export default Buttons;