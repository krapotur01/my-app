import React, {useState} from 'react';
import styles from './ProfileInfo.module.css';

const ProfileContactInfo = (props) => {
    const nameInfoColumn = styles.nameInfoColumn;

    const [editMode, setEditMode] = useState(false);
    const [obj, setProfileInfo] = useState(props.profile);

    const editModeOn = () => { setEditMode(true) }

    const editModeOf = () => {
        setEditMode(false);
        props.updateProfile(obj)
    }

    // const onInputChange = (event) => {
    //     setProfileInfo(event.currentTarget.value)
    // }


    // const contactsInfo = Object.keys(profileAPI.contacts).map(el => (
    //     <li key={el} className={styles.listInfo}>
    //         <p className={nameInfoColumn}>{el} </p>

    //         {!editMode
    //             ? <span >{el[''] || 'не заполнено'}</span>
    //             : <input onChange={onInputChange}/>
    //         }
    //     </li>
    // ))

    return (  
        <div className={styles.info}>
            <ul>
                <li className={styles.listInfo}>
                    <p className={nameInfoColumn}>Full Name:</p>
                    {!editMode
                        ? <span>{props.profile.fullName || 'не заполнено'}</span>
                        : <input onChange={setProfileInfo}/>
                    }
                </li>
                <li className={styles.listInfo}>
                    <p className={nameInfoColumn}>About me: </p>
                    {!editMode
                        ? <span>{props.profile.aboutMe || 'не заполнено'}</span>
                        : <input onChange={setProfileInfo}/>
                    }
                </li>
                <li className={styles.listInfo}>
                    <p className={nameInfoColumn}>About for Job:</p>
                    {!editMode
                        ? <span>{props.profile.lookingForAJobDescription || 'не заполнено'}</span>
                        : <input onChange={setProfileInfo} />
                    }
                </li>
                <li className={styles.listInfo}>
                    <p className={nameInfoColumn}>Contacts:</p>
                </li>
            </ul>
            <ul className={styles.contacts}>
                {/* {contactsInfo} */}

                <li className={styles.listInfo}>
                    <p className={nameInfoColumn}>Facebook</p>
                    {!editMode
                        ? <span >{props.profile.contacts.facebook || 'не заполнено'}</span>
                        : <input onChange={setProfileInfo} />
                    }
                </li>
            </ul>
            <div>
                <button onClick={editModeOn}>edit</button>
                <button onClick={editModeOf}>save</button>
            </div>
        </div>
    )
}

export default ProfileContactInfo;