import React from "react";
import Entrance from "./Entrance";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";

const EntranceContainer = (props) => {

    const onSubmitButton = (data, event) => {
        event.preventDefault();
        data["hours"] = 0;
        data['certificated'] = false;
        data['username'] = data['first_name'];
        props.login(data)
        console.log(data)
    }

    return (
        <Entrance onSubmitButton={onSubmitButton}/>
    )

}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {login})(EntranceContainer);