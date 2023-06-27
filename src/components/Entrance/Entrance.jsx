import React, { useCallback, useEffect, useRef, useState } from "react";
import e from "./Entrance.module.css";
import { NavLink } from "react-router-dom";
import ComeIn from "./ComeIn/ComeIn";
import Registration from "./Registration/Registration";
import EntranceMethod from "./EntranceMethod/EntranceMethod";
import { useForm, FormProvider } from 'react-hook-form'; 


const Entrance = ({onSubmitButton}) => {

    const [isRegistration, setIsRegistration] = useState(false);

    const methods = useForm()
    const {handleSubmit} = methods;
    const { register, setValue } = useForm();

    const modalRef = useRef(null)

    const startOptionRegion = "Выберите регион";
    const [selectedOptionRegion, setSelectedOptionRegion] = useState(startOptionRegion);

    const startOptionBirthday = "Дата рождения";
    const [selectedOptionBirthday, setSelectedOptionBirthday] = useState(startOptionBirthday);

    const [isOpenModalWindow, setIsOpenModalWindow] = useState(false);

    const handleClickOnChangeEmail = () => {
        setIsOpenModalWindow(false);
    }

    const handleClickOnModalParent = (event) => {
        if (!modalRef.current.contains(event.target)) {
            setIsOpenModalWindow(false);
        }
    }

    return (
        <main>
            <div className="container">
                <div className={e.entrance__wrapper}>
                    <h2>Добро пожаловать</h2>
                    <div className={e.navigator}>
                        <NavLink className={isRegistration ? `${e.check}` : e.check + " " + e.active} onClick={() => { setIsRegistration(false) }}>Вход</NavLink>
                        <NavLink className={isRegistration ? e.check + " " + e.active : `${e.check}`} onClick={() => { setIsRegistration(true) }}>Регистрация</NavLink>
                    </div>
                    <FormProvider {...methods}>
                        <form className={e.form} onSubmit={handleSubmit(onSubmitButton)}> 
                            {isRegistration ? 
                            <Registration register={register} 
                                setValue={setValue}
                                startOptionRegion={startOptionRegion}
                                selectedOptionRegion={selectedOptionRegion}
                                setSelectedOptionRegion={setSelectedOptionRegion}
                                startOptionBirthday={startOptionBirthday}
                                selectedOptionBirthday={selectedOptionBirthday}
                                setSelectedOptionBirthday={setSelectedOptionBirthday}

                            /> 
                            : <ComeIn />}
                            {isRegistration ? <EntranceMethod setIsOpenModalWindow={setIsOpenModalWindow} textOfBtn={"Зарегистрироваться"}/> : <EntranceMethod textOfBtn={"Войти"}/>}
                            {isRegistration && 
                            <div onClick={handleClickOnModalParent} 
                                className={`${e.modal__window} ${isOpenModalWindow ? "" : e.modal__window_close}`}>
                                <div className={e.modal} ref={modalRef}>
                                    <h3>Сообщение отправлено</h3>
                                    <p>Подтвердите, что это Ваша почта, написав код, отправленный на ваш email</p>
                                    <input type="text" placeholder="Введите код"/>
                                    <button className={e.modal__button}>Ok</button>
                                    <button className={e.modal__exit} type="button" onClick={handleClickOnChangeEmail}>Изменить адрес электронной почты</button>
                                </div>
                            </div>}
                        </form>
                    </FormProvider>
                </div>
            </div>
        </main>
    )
}

export default Entrance;

