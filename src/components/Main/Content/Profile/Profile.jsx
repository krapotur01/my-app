import React from 'react';
import styles from './Profile.module.css';
import Preloader from './../../../common/Preloader/Preloader';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import PostsContainer from './Posts/PostsContainer';

const Profile = props => {
    if(!props.profile) {
        return <Preloader />
    }

    return (  
        <div className={styles.posts_block}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} updateProfile={props.updateProfile} />
            <PostsContainer />
        </div>
    )
}

export default Profile;
