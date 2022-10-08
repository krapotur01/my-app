import React from 'react';
import cond from "./Conditions.module.css";

const Conditions = (props) => {
    return (
        <section className={cond.conditions}>
                <p className={cond.paragraph}>В случае несогласия с результатами экзамена Кандидат имеет право на подачу апелляции:</p>
                <ul className={cond.list}>
                    <li className={cond.item}>сроки подачи: не позднее 6 недель с даты письменного экзамена.</li>
                    <li className={cond.item}>сроки рассмотрения: от 2 дней до 3 недель с даты получения запроса.</li>
                    <li className={cond.item}>стоимость: 9500 рублей* +100 рублей комиссия за онлайн перевод</li>
                </ul>
        </section>
    );
}

export default Conditions;