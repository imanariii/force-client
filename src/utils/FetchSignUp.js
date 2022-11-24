import axios from "axios";
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';
// import { useContext } from "react";
// import { User } from "../User";

export async function FetchSignUp(login, password) {
    // const {state, dispatch} = useContext(User)
    try {
        const { data } = await axios.post('http://localhost:5000/auth/registration', {email: login, password: password})
        Cookies.set('token', data.token)
        const user = jwt_decode(data)
        console.log(user)
    } catch (error) {
        console.log(error.response.data.message)
    }
}