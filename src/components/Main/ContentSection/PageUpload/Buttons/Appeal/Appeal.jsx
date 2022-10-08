import React from 'react';
import appl from './Appeal.module.css';
import btns from './../Buttons.module.css';

const Appeal = (props) => {
    return (
        <div className={btns.items}>
            <h3 className={btns.heding}>ОПЛАТИТЕ</h3>
            <p className={btns.paragraph}>подачу апелляции</p>
            <p className={appl.paragraph_red}>Стоимость апелляции - 7700 ₽</p>
            <button type="submit" className={`${appl.apltn} ${appl.disabled}`} disabled>Оплата апелляции</button>
        </div>
    )
}

export default Appeal;