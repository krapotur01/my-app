import React from "react";
import styles from './Main.module.css';
import Content from "./Content/Content.jsx";
import ProfileSection from "./ProfileSection/ProfileSection.jsx";

const Main = () => {
    return (
        <main className={styles.main}>
            <ProfileSection /> 
            <Content /> 
        </main>
    )
}

export default Main;
