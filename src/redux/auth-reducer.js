import { authAPI } from "../API/API";

const SET_USER_DATA = "auth/SET_USER_DATA";

let initialState = {
    userId: null,
    firstName: null,
    secondName: null,
    thirdName: null,
    phoneNumber: null,
    email: null,
    birthday: null,
    region: null,
    city: null,
}

const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return{
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (user) => {
    return {
        type: SET_USER_DATA,
        payload: user,
    }
}

export const login = (user) => async (dispatch) =>{
    let res = await authAPI.registrationUser(user);
    console.log(res);
    console.log("Surprise mother fucker!");
}

export default authReducer