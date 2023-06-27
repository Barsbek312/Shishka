import React, { useState, useEffect } from "react";
import './SideBar.css';
import { slide as Menu } from 'react-burger-menu';
import { useSwipeable } from 'react-swipeable';
import { NavLink } from "react-router-dom";
import qrCode from './../../../assets/images/sidebar__images/qr_code.svg';

const SideBar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSwipeLeft = () => {
        setIsSidebarOpen(false);
    };

    const handleSwipeRight = () => {
        setIsSidebarOpen(true);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleSwipeLeft,
        onSwipedRight: handleSwipeRight,
    });

    useEffect(() => {
        setIsSidebarOpen(false);
    }, []);

    const handleMenuStateChange = (state) => {
        setIsSidebarOpen(state.isOpen);
    };

    return (
        <div className={"wrapper"} {...swipeHandlers}>
            <Menu width={'167px'} isOpen={isSidebarOpen} onStateChange={handleMenuStateChange}>
                <div className="sidebar__header">
                    <div className="sidebar__ava">
                        {/* <img src="" alt="sidebar-ava" /> */}
                    </div>
                    <h2><NavLink to="/entrance">Войти</NavLink></h2>
                </div>
                <NavLink to="/" className="menu-item">Домой</NavLink>
                <NavLink to="/settings" className="menu-item">Настройки</NavLink>
                <NavLink to="/rating" className="menu-item">Рейтинг</NavLink>
                <NavLink to="/organizations" className="menu-item">Организации</NavLink>
                <NavLink to="/chat" className="menu-item">Чат</NavLink>
                <div className="advertising">
                    <h3 className="advertisin__title">Реклама</h3>
                </div>
                <div className="qr_code">
                    <img src={qrCode} alt="qr-code" />
                </div>
            </Menu>
        </div>
    );
}

export default SideBar;