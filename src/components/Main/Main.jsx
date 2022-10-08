import React from "react";
import main from './Main.module.css';
import Content from "./ContentSection/Content.jsx";
import Profile from "./Profile/Profile.jsx";

const Main = (props) => {
    return (
        <main className={main.main}>
            <Profile /> 
            <Content store={props.store} /> 
        </main>
    )
}

export default Main;
