import React from 'react';
import come from './ComeIn.module.css'
import './../EntranceInput.css';
import EntraceEmailPassword from '../EntranceEmailPassword/EntranceEmailPassword';

const ComeIn = () => {
    const listOfWathcingOfPass = ["password"]
    return (
        <div className={come.form}>
            <EntraceEmailPassword listOfWathcingOfPass={listOfWathcingOfPass}/>
            <div className={come.forget__password}>
                <a>Забыли пароль ?</a>
            </div>
        </div>
    )
}

export default ComeIn;