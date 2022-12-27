import React, {useState} from 'react';
import { Formik, Form, useField } from 'formik';
import styles from './ProfileInfo.module.css';
import * as Yup from 'yup';
 
const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label className={styles.label} htmlFor={props.id || props.name}>{label}</label>
            <input className={styles.input} {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className={styles.error}>{meta.error}</div>
            ): null}            
        </>
    );
};
 
 // And now we can use these
const ProfileContactInfo = (props) => {
    const [editMode, setEditMode] = useState(false);
    const editModeOn = () => { setEditMode(true) };
    const editModeOf = () => { setEditMode(false) };

   return (
     <>
        <Formik
            initialValues={{
                fullName: props.profile.fullName,
                aboutMe: props.profile.aboutMe,
                lookingForAJobDescription: props.profile.lookingForAJobDescription,
                facebook: props.profile.contacts.facebook,
            }}
            validationSchema={Yup.object({
                fullName: Yup.string()
                    .max(40, 'Must be 40 characters or less')
                    .required('Required'),
                aboutMe: Yup.string()
                    .max(100, 'Must be 100 characters or less')
                    .required('Required'),
                lookingForAJobDescription: Yup.string()
                    .max(50, 'Must be 50 characters or less')
                    .required('Required'),
                facebook: Yup.string().nullable()
                    .url()
                    .required('Required'),                    
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    setSubmitting(false);
                    // alert(JSON.stringify(values, null, 2))
                    props.updateProfile(values.fullName, values.aboutMe, values.lookingForAJobDescription, values.facebook);
                }, 400);
            }}
        >
            <Form className={styles.listInfo}>
                {!editMode
                    ? <span>{props.profile.fullName || 'не заполнено'}</span>
                    : <MyTextInput label="Full Name" name="fullName" type="text" placeholder="Rita Vrataski" />
                }
                {!editMode
                    ? <span>{props.profile.aboutMe || 'не заполнено'}</span>
                    : <MyTextInput label="About me" name="aboutMe" type="text" placeholder="info" />
                }
                {!editMode
                    ? <span>{props.profile.lookingForAJobDescription || 'не заполнено'}</span>
                    : <MyTextInput label="Job" name="lookingForAJobDescription" placeholder="programmer" /> 
                }
                {!editMode
                    ? <span>{props.profile.contacts.facebook || 'не заполнено'}</span>
                    : <MyTextInput label="facebook" name="facebook" placeholder="https://" /> 
                }
                <button onClick={editModeOn} type="button">Edit</button>
                <button onClick={editModeOf} type="submit">Submit</button>
            </Form>
        </Formik>
     </>
   );
};

export default ProfileContactInfo;