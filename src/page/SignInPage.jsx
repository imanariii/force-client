import React from 'react';
import {Header} from "../components";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import {useState} from "react";
import '../styles/sign.css';
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {FetchSignIn} from "../utils/FetchSignIn";
import { Api } from '../context/Api';

export default function SignInPage () {
    const [values, setValues] = useState({
        login: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
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
                <main>
                    <div className="sign__wrapper">
                        <div className="sign__body">
                            <h1>Авторизация</h1>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                                <OutlinedInput
                                  id="outlined-adornment-email"
                                  type={'email'}
                                  value={values.login}
                                  placeholder="От 4 до 16 символов"
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
                            <FetchSignIn login={values.login} password={values.password} context={context} />
                        </div>
                    </div>
                </main>
                <Header />
            </>
            )
          }

      </Api.Consumer>
    )
};
