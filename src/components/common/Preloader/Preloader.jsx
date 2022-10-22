import React from 'react';
import styles from './Preloader.module.css';
import preloader from './../../../assets/images/preloader.gif';

const Preloader = (props) => {
    return <img src={preloader} className={styles.preloader} alt="Preloader" />
}

export default Preloader;