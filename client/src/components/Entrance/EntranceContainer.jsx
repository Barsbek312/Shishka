import React, {useEffect, useState} from "react";
import Entrance from "./Entrance";
import { connect, useSelector } from "react-redux";
import { register, login } from "../../redux/user.js";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

const EntranceContainer = (props) => {

    const dispatch = useDispatch();
    const { registered, loading } = useSelector(state => state.user);

    const [isError, setIsError] = useState(false);

    const onSubmitButton = (data, event) => {
        event.preventDefault();
        const dataLength = Object.keys(data).length;
        if(dataLength <= 3) {
            const setError = dataLength > 2 ? false : true;
            setIsError(setError);
            if(!isError) {
                data.status = data.status?.replace(/\s/g, '');
                if(data.status === "Волонтер") {
                    delete data.status;
                    dispatch(login(data));
                    console.log(data);
                }
            }
            // console.log(data);
        } 
        else {
            delete data.confirmPassword;
            data["hours"] = 0;
            data['certificated'] = false;
            data['username'] = data['email'];
            dispatch(register(data));
        }
    }

    useEffect(() => {
        console.log(isError)
    }, [isError])

    // if(registered) { 
    //     return <Navigate to="/" />
    // }

    if(registered) return <Navigate to="/messageVerify" />

    return (
        <Entrance onSubmitButton={onSubmitButton} 
            isLoading={loading}
            isError={isError}
            setIsError={setIsError}/>
    )

}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {register})(EntranceContainer);
// export default connect(mapStateToProps, {login})(EntranceContainer);