import {Footer, Header} from "../components";
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
                <main className={`sign__page-${context.theme}`}>
                    <div className={`sign__wrapper-${context.theme}`}>
                        <div className='sign__body'>
                            <h1>Авторизация</h1>
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '70%'}}>
                            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
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
                                  placeholder="От 6 до 16 символов"
                                  label="Ваш пароль:"
                                />
                            </FormControl>
                            </div>
                            <FetchSignIn login={values.login} password={values.password} context={context} />
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
};
