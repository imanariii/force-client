import axios from "axios";
import React from "react";
import Cookies from 'js-cookie'
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export function FetchSignIn({login, password, context}) {
    const navigate = useNavigate();
    const axiosIn = async (login, password) => {
        try {
            const { data } = await axios.post(`${context.address}/user/login`, {email: login, password: password})
            context.notifySuc('Успешно')
            setTimeout(() =>{
                Cookies.set('token', data.token)
                context.setToken(data.token);
                navigate('../profile')
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
      <div style={{display: 'flex',flexDirection: 'column' , gap: '1rem', width: '70%'}}>
          <Button id="btn" style={{width: '100%'}} variant="contained" onClick={()=> axiosIn(login, password)}>Войти</Button>
          <Link style={{width: '100%'}} to="../signup"><Button id="btn" style={{width: '100%'}} variant="outlined">У вас нет аккаунта</Button></Link>
      </div>
    )
}