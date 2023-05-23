import React from 'react';
import {Footer, Header} from "../components";
import {useState} from "react";
import {
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput
} from "@mui/material";
import 'react-notifications/lib/notifications.css';

import {Visibility, VisibilityOff} from "@mui/icons-material";
import {FetchSignUp} from '../utils/FetchSignUp'
import { Api } from '../context/Api';

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
      <Api.Consumer>
        {context => (
        <>
            <Header />
            <main className={`sign__page-${context.theme}`}>
                <div className={`sign__wrapper-${context.theme}`}>
                    <div className='sign__body'>
                        <h1>Регистрация</h1>
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '70%'}}>
                            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
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
                            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
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
                        </div>
                            <FetchSignUp login={values.login} password={values.password} context={context} />
                    </div>
                </div>
                <img src="https://sportsmarketinginfo.files.wordpress.com/2010/02/sports_by_saharay.jpg" alt="" />
            </main>
            <Footer />
        </>
    )
}

</Api.Consumer>
    )
}
