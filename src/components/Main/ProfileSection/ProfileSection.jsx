import React from 'react';
import prof from './ProfileSection.module.css';
import Nav from './Nav/Nav.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const ProfileSection = (props) => {
    return (
        <section className={prof.profile}>
            <div className={prof.main}>
                <Nav />
                <ProfileInfo />
            </div>

            <div className={prof.bottom}>
                <form className={prof.form} action="" method="get">
                    <input name="s" placeholder="Искать здесь..." type="search" />
                    <button type="submit" className={prof.submit}>Поиск</button>
                </form>
            </div>
        </section>
    )
}

export default ProfileSection;
