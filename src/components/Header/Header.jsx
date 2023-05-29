import React from "react";
import "./../../index";
import h from './Header.module.css';
import SideBar from "./SideBar/SideBar";
import audio from './../../assets/images/audio-speech.svg';

const Header = () => {
    return (
        <div className={"container"}>
            <div className={h.header}>
                <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
                <div className={h.wrapper__input} id="page-wrap">
                    <input type="text" className={h.input} placeholder="Введите запрос"/>
                    <button className={h.btn}><img src={audio} alt="audio-speech"/></button>
                </div>
                <div className={h.avatar}>
                    {/* <img src="" alt="avatar-img" /> */}
                </div>
            </div>
        </div> 
    )
}

export default Header;