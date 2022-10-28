import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Users.module.css';
import avatar from './../../../../assets/images/avatar.png';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
    let curPL = curP + 5;
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }  
    let slicedPages = pages.slice( curPF, curPL);

    return (
        <div className={styles.users_page}>
            <ul className={styles.selectedPage_block}>
                { slicedPages.map(el => {
                    return <li key={el} onClick={(evt) => {props.onPageChanged(el)}} className={`${props.currentPage === el && styles.selectedPageActive} ${styles.selectedPage}`}>{el}</li>
                })}
            </ul>
            <div className={styles.dialogs}>
                {props.users.map(el =>
                    <div key={el.id} className={styles.dialogs__item}>
                        <div className={styles.img_follow_block}>
                           <NavLink to={'/profile/' + el.id}>
                                <img src={ el.photos.small != null ? el.photos.small : avatar } alt='Аватар' className={styles.avatar} />
                            </NavLink>
                            { el.followed
                                ? <button disabled={props.followingInProgress.some(id => id === el.id)} 
                                    onClick={() => {props.unfollow(el.id)}} className={styles.follow}>Unfollow</button> 
                                : <button disabled={props.followingInProgress.some(id => id === el.id)} 
                                    onClick={() => {props.follow(el.id)}} className={styles.follow}>Follow</button>
                            }
                        </div>
                        <div className={styles.message_block}>
                            <div className={styles.message_main}>
                                <p className={styles.name_user}>{el.name}</p>
                                <p className={styles.status}>{el.status}</p>
                                <span className={styles.date}>{el.date}</span>
                            </div>
                            <div className={styles.location}>
                                <p className={styles.country}>{'el.country'}</p>
                                <p className={styles.capital}>{'el.city'}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Users;