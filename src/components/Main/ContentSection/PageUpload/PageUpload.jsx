import React from 'react';
import page from './PageUpload.module.css';
import Conditions from './Conditions/Conditions.jsx';
import Buttons from './Buttons/Buttons.jsx';
import InfoUpload from './InfoUpload/InfoUpload.jsx';


const PageUpload = (props) => {
    return (
        <div className={page.pageUpload}>
            <Conditions />
            <Buttons />
            <InfoUpload />
        </div>
    )
}

export default PageUpload;