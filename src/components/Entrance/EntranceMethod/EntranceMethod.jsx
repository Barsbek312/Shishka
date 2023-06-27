import React from "react";
import ECom from './EntranceMethod.module.css';

const EntranceMethod = ({textOfBtn, setIsOpenModalWindow}) => {
    return (
        <div className={ECom.wrapper}>
            <div className={ECom.comeIn}>
                <button type={"button"} onClick={() => {setIsOpenModalWindow(true)}}>{textOfBtn}</button>
            </div>
            <div className={ECom.or}>
                <div></div>
                <span>Или</span>
                <div></div>
            </div>
            <div className={ECom.alternatives}>
                <a>
                    <button type="button" className={ECom.google}>Google</button>
                </a>
                <a>
                    <button type="button" className={ECom.apple}>Apple</button>
                </a>
            </div>
        </div>
    )
}

export default EntranceMethod;