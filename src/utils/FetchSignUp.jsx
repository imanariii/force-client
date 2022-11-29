import axios from "axios";
import Cookies from 'js-cookie';
import { Button } from "@mui/material";
import React from "react"
import { useNavigate, Link } from "react-router-dom";

export function FetchSignUp({login, password, context}) {
    const navigate = useNavigate();
    const axiosUp = async () => {
        try {
            const { data } = await axios.post('http://localhost:5000/auth/registration', {email: login, password: password})
            Cookies.set('token', data.token)
            navigate("../profile");
        } catch (error) {
            console.log(error.response.data)
            context.createNotification('error')
        }
    }

    return (
      <>
          <Button variant="contained" onClick={()=>axiosUp()}>Зарегистрироваться</Button>
          <Link to="../signin"><Button variant="outlined">У вас уже есть аккаунт</Button></Link>
      </>
    )
}