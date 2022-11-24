import React from 'react';
import {Header} from "../components";
import {useState} from "react";
import {
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    Link,
    OutlinedInput
} from "@mui/material";

import {Visibility, VisibilityOff} from "@mui/icons-material";
import {FetchSignUp} from '../utils/FetchSignUp'

export default function SignUpPage () {
    const [values, setValues] = useState({
        login: '',
        password: '',
        showPassword: false
    });

    const handleChange = (prop) => (event) => {
        const value = event.target.value;
        setValues({ ...values, [prop]: value });
    }
    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword,});
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Header />
            <main>
                <div className="sign__wrapper">
                    <div className="sign__body">
                            <h1>Регистрация</h1>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-email"
                                    type={'email'}
                                    value={values.login}
                                    placeholder="Введите вашу почту"
                                    label="Ваш пароль:"
                                    onChange={handleChange('login')}
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    placeholder="От 4 до 16 символов"
                                    label="Ваш пароль:"
                                />
                            </FormControl>
                            <Link href="../profile"><Button variant="contained" onClick={(event)=>{
                                FetchSignUp(values.login, values.password);
                                event.preventDefault();
                            }}>Зарегистрироваться</Button></Link>
                            <Link href="../signin"><Button variant="outlined">У вас уже есть аккаунт</Button></Link>
                    </div>
                </div>
            </main>
            <Header />
        </>
    )
}
