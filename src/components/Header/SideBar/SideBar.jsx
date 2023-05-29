import React from "react";
import './SideBar.css';
import { slide as Menu } from 'react-burger-menu';

const SideBar = () => {
    return (
        <div className={"wrapper"}>
            <Menu width={ '100%' }>
                <a className="menu-item">bntjbt</a>
                <a className="menu-item">gregreg</a>
                <a className="menu-item">gregwer</a>
                <a className="menu-item">gwerger</a>
            </Menu>
        </div>
    );
}

export default SideBar;