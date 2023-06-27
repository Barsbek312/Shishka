import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: "http://127.0.0.1:8000/",
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
    }
})

export const authAPI = {
    async registrationUser(user) {
        let res = instance.post(`users/`, user);
        console.log(res);
    }
}