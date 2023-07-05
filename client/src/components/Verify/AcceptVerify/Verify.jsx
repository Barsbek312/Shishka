import React, { useEffect, useState } from "react";
import v from './Verify.module.css';
import { Navigate, useParams } from "react-router-dom";
import { verify } from "../../../redux/user";
import { useDispatch } from "react-redux";

const Verify = () => {

    const params = useParams();

    const dispatch = useDispatch();
    const [verified, setVerified] = useState(false);
    const [isHandleClick, setIsHandleClick] = useState(false);

    const handleOnClick = (event) => {
        const uid = params.uid;
        const token = params.token;


        dispatch(verify({uid, token}));
        // setVerified(true);
    }

    if(verified) return <Navigate to="/" />

    if(isHandleClick) return <Navigate to="/entrance" />

    return (
        <main className={v.main__wrapper}>
            <div className="container">
                <div className={v.modal}>
                    <h3>Сообщение отправлено</h3>
                    <p>
                        Подтвердите, что это Ваша почта
                    </p>
                    <button onClick={handleOnClick} className={v.modal__button}>Подтвердить</button>
                    <button
                        className={v.modal__exit}
                        type="button"
                        onClick={() => {setIsHandleClick(true)}}
                    >
                        Изменить адрес электронной почты
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Verify;