import React, { useState, useEffect } from 'react';
import styles from './ProfileInfo.module.css';

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {setStatus(props.status)}, [props.status]);

    const editModeOn = () => { setEditMode(true) }

    const editModeOf = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value)
    }
    
    return (   
        <div className={styles.profileStatus}>
            {!editMode
                ? <span onDoubleClick={editModeOn}>{props.status || "No status"}</span>
                : <input onChange={onStatusChange} value={status} autoFocus={true} onBlur={editModeOf} name={'statusProfile'} />
            }
        </div>
    )    
}

export default ProfileStatus;