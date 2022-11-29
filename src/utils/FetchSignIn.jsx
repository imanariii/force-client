import axios from "axios";
import React from "react"
import Cookies from 'js-cookie'
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export function FetchSignIn({login, password, context}) {
  const navigate = useNavigate();
  const axiosIn = async (login, password) => {
    try {
      const { data } = await axios.post('http://localhost:5000/auth/login', {email: login, password: password})
      Cookies.set('token', data.token)
      navigate("../profile");
    } catch (error) {
      context.notify(error.response.data.message)
    }
  }

  return (
        <>
          <Button variant="contained" onClick={()=>{
            axiosIn(login, password);
          }}>Войти</Button>
          <Link to="../signup"><Button variant="outlined">У вас нет аккаунта</Button></Link>
        </>
  )
}