import React from 'react';
import dwnld from './Download.module.css';
import btns from './../Buttons.module.css';


const Download = (props) => {
    return (
        <div className={btns.items}>
            <div className={btns.text}>
                <h3 className={btns.heding}>СКАЧАЙТЕ И ЗАПОЛНИТЕ</h3>
                <p className={btns.paragraph}>два файла с заявлением на апелляцию</p>
            </div>
            <div className={btns.btns}>
                <button type="button" className={`${btns.btn} ${dwnld.btn1}`}></button>
                <button type="button" className={`${btns.btn} ${dwnld.btn2}`}></button>
            </div>
        </div>
    )
}

export default Download;