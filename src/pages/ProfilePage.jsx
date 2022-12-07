import { Header} from "../components";
import React, {} from "react";
import '../styles/sign.css';
import { Button } from "@mui/material";
import Cookies from 'js-cookie';
import { Api } from '../context/Api'
import { Link } from "react-router-dom";

const ProfilePage = () => {
    return (
      <Api.Consumer>
        {context => (
          context.user &&
          <>
            <Header />
            <main>
              <div className={`sign__wrapper-${context.theme}`}>
                <div className={`sign__body-${context.theme}`}>
                  <h1>Profile</h1>
                  <div className="profile-content">
                    <div>
                      <p className="content-title">Ваш E-mail : {context.user.email}</p>
                      <p className="content-role">Ваша роли : { context.user.role }</p>
                      <p className="content-address">Ваш адрес : </p>
                    </div>
                    <div>
                      { context.user.role === 'ADMIN' &&
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
                                  context.resetUser();
                                  context.toggleIsAuth(false);
                                  context.toggleIsAdmin(false);
                                  context.removeToken();
                                }}>
                          Выйти из аккаунта
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <Header />
          </>
        )}
      </Api.Consumer>

    )
}

export default ProfilePage;