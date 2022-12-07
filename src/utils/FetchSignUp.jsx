import axios from "axios";
import Cookies from 'js-cookie';
import { Button } from "@mui/material";
import React from "react"
import { useNavigate, Link } from "react-router-dom";

export function FetchSignUp({login, password, context}) {
    const navigate = useNavigate();
    const axiosUp = async () => {
        try {
            const { data } = await axios.post('http://localhost:5000/api/user/registration', {email: login, password: password, role: 'Пользователь'})
            context.notifySuc('Успешно')
            setTimeout(() =>{
                Cookies.set('token', data.token)
                context.setToken(data.token)
                navigate("../profile");
            }, 3000)
        } catch (error) {
            console.log(error)
            if (typeof error.response.data.message === 'string') {
                context.notifyErr(error.response.data.message)
            } else {
                error.response.data.map(message=>context.notifyErr(message))
            }
        }
    }

    return (
      <div style={{display: 'flex',flexDirection: 'column' , gap: '1rem', width: '70%', justifyContent: 'center', alignItems: 'center'}}>
          <Button id="btn" style={{width: '100%'}} variant="contained" onClick={()=>axiosUp()}>Зарегистрироваться</Button>
          <Link style={{width: '100%'}} to="../signin"><Button id="btn" style={{width: '100%'}} variant="outlined">У вас уже есть аккаунт</Button></Link>
      </div>
    )
}