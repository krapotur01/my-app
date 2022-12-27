import React from 'react';
import styles from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus.jsx';
import noAvatar from './../../../../../assets/images/avatar.png';
import ProfileContactInfo from './Formik';

const ProfileInfo = (props) => {
    let profileAvatar = props.profile.photos.large;

    return (  
        <div className={styles.profileInfo}>
            <div className={styles.imgPhotoName}>
                <img src={profileAvatar != null ? profileAvatar : noAvatar } alt="Аватар" className={styles.avatar} />
                <p className="profileFullName">{props.profile.fullName}</p>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>

            <ProfileContactInfo profile={props.profile} updateProfile={props.updateProfile} />
            
        </div>
    )
}

export default ProfileInfo;