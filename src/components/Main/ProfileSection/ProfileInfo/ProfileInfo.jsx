import React from 'react';
import prof from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={prof.profile_info}>
            <div>
                <p>Кемран Абдуллаев</p>
                <p>Моя профессия</p>
                <div className={prof.contain}>
                    <button className={`${prof.button} ${prof.main_info} ${prof.my_project}`}>написать</button>
                    <button className={`${prof.button} ${prof.main_info} ${prof.write_me}`}>проект</button>
                </div>
            </div>
            <div className={prof.img}></div>
        </div>
    )
}

export default ProfileInfo;
