import {Footer, Header, Orders} from "../components";
import React, { useContext, useEffect, useState } from "react";
import '../styles/profile.css';
import { Button, TextField } from "@mui/material";
import Cookies from 'js-cookie';
import { Api } from '../context/Api'
import { Link } from "react-router-dom";
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import editAddressUser from "../utils/editAddressUser";
import FetchGetOneUser from "../utils/FetchGetOneUser";
import jwt_decode from "jwt-decode";

const ProfilePage = () => {
    const state = useContext(Api)
    const userId = jwt_decode(state.token);

    const [newAddress, setNewAddress] = useState('')
    const [editInput, setEditInput] = useState(false)



    const onChangeNewAddress = (address) => {
      setNewAddress(address)
    }

    useEffect(()=>{
      if(state.user.email === undefined) {
        const user = jwt_decode(state.token);
        FetchGetOneUser(user.id, state)
      }
    }, [state, newAddress])

    return (
          <>
            <Header />
            <main className={`${state.theme}-profile profile`}>
              <div className='profile__wrapper'>
                <div className='profile__body'>
                  <h1>Личный кабинет</h1>
                  <div className="profile-content">
                      <p className="content-title">Ваш E-mail : {state.user.email}</p>
                      <p className="content-role">Ваша роль : { state.user.role }</p>
                        {!editInput ? (
                          <div className="content-address">
                            <span>Ваш адрес : {state.user.address}</span>
                            <Button id="btn" variant="contained" startIcon={<EditLocationAltIcon />} onClick={()=>setEditInput(true)}>
                              Изменить
                            </Button>
                          </div>
                        ) : (
                          <div className="content-address">
                            <TextField id="outlined-basic" label="Введите новый адрес" variant="outlined" width={"100%"} onChange={(e)=>onChangeNewAddress(e.target.value)} />
                            <Button id="btn" variant="contained" startIcon={<CheckCircleIcon />}
                                    style={{
                                      height: 'min-content',
                                      padding: '12px 24px'
                                    }}
                                    onClick={()=>{
                                      if(newAddress.length > 10) {
                                        setEditInput(false)
                                        editAddressUser(state, state.user.id, newAddress)
                                        FetchGetOneUser(userId.id, state)
                                        state.notifySuc('Успешно обновлен адрес!')
                                      } else {
                                        state.notifyErr('Адрес не может быть короче 10 символов!')
                                      }
                            }}>
                              Подтвердить
                            </Button>
                          </div>
                        )}
                    </div>
                    <div className="profile-actions">
                      { state.user.role === 'ADMIN' &&
                        <Link to="../admin-panel/products">
                          <Button id="btn" variant="contained">
                            Войти в Админ-панель
                          </Button>
                        </Link>
                      }
                      <Link to="../">
                        <Button id="btn"
                                variant="contained"
                                onClick={()=> {
                                  Cookies.remove('token')
                                  state.resetUser();
                                  state.toggleIsAuth(false);
                                  state.toggleIsAdmin(false);
                                  state.removeToken();
                                }}>
                          Выйти из аккаунта
                        </Button>
                      </Link>
                    </div>
                  </div>
              </div>

              <Orders />
            </main>
            <Footer />
          </>
    )
}

export default ProfilePage;