import { Header} from "../components";
import React, { useContext } from "react";
import '../styles/sign.css';
import { Button } from "@mui/material";
import Cookies from 'js-cookie';
import { Api } from '../context/Api'
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { FetchRemove } from "../utils/FetchRemove";

const ProfilePage = () => {
    const state = useContext(Api)
    return (
          <>
            <Header />
            <main>
              <div className={`sign__wrapper-${state.theme}`}>
                <div className={`sign__body-${state.theme}`}>
                  <h1>Profile</h1>
                  <div className="profile-content">
                    <div>
                      <p className="content-title">Ваш E-mail : {state.user.email}</p>
                      <p className="content-role">Ваша роли : { state.user.role }</p>
                      <p className="content-address">Ваш адрес : </p>
                    </div>
                    <div>
                      { state.user.role === 'ADMIN' &&
                        <Link to="../admin-panel">
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
              </div>
              <div className="cart__wrapper">
                <div className="cart__body">
                  <h1>Ваша корзина</h1>
                  <table>
                    <tr>
                      <td>Image</td>
                      <td>Title</td>
                      <td>Price</td>
                      <td></td>
                    </tr>
                    { state.cards.length > 0 && state.cards.map(item => (
                      <tr key={item.id}>
                        <td><Image height='50px' width='50px' src={'http://localhost:5000/' + item.img}/></td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td><FetchRemove id={item.id} /> </td>
                      </tr>
                    ))}
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </table>
                </div>
              </div>
            </main>
            <Header />
          </>
    )
}

export default ProfilePage;