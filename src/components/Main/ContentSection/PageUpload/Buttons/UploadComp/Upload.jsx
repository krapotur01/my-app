import React from 'react';
import upld from './Upload.module.css';
import btns from './../Buttons.module.css';

const Upload = (props) => {
    return (
        <div className={btns.items}>
            <div className={btns.text}>
                <h3 className={btns.heding}>ОТСКАНИРУЙТЕ И ЗАГРУЗИТЕ</h3>
                <p className={btns.paragraph}>заполненные заявления</p>
            </div>
            <div className={btns.btns}>
                <input type="file" id="file1" className={btns.input} />
                <input type="file" id="file2" className={btns.input} />
                <button type="file" className={`${btns.btn} ${upld.btn1}`}></button>
                <button type="button" className={`${btns.btn} ${upld.btn1}`}></button>
            </div>
        </div>
    )
}

export default Upload;