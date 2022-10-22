import React from 'react';
import styles from './Profile.module.css';
import PostItem from './PostItem/PostItem.jsx';
import Preloader from './../../../common/Preloader/Preloader';

const Profile = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    const postRender = props.profileData.map(el => <PostItem id={el.id} key={el.id} likeCount={el.likeCount} name={el.name} text={el.text} />)

    const onAddPostClick = () => {
        props.addPost();
    }

    const onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
    }

    return (  
        <div className={styles.posts_block}>
                <img src={props.profile.photos.large} alt="Аватар" className={styles.avatar} />
                <div className={styles.textarea_block}>
                    <textarea onChange={onPostChange} placeholder='введите сообщение' value={props.newPostText} />
                    <button onClick={onAddPostClick} className={styles.button}>написать</button>
                </div>
                <section className={styles.posts}>
                    { postRender }
                </section>
        </div>
    )
}

export default Profile;
