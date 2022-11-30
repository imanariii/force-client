import { Header} from "../components";
import React, {useState} from "react";
import '../styles/sign.css';
import { Button } from "@mui/material";
import Cookies from 'js-cookie';
import { Api } from '../context/Api'
import { Link } from "react-router-dom";

const ProfilePage = () => {
    const [isAdmin, setIsAdmin] = useState(false);
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
                      <p className="content-role">Ваша роли : { context.user.roles.map(role=>{
                        if(role.value === "ADMIN") {
                          setIsAdmin(true);
                          return role.value
                        } else {
                          setIsAdmin(false);
                          return role.value
                        }
                      }) }</p>
                      <p className="content-address">Ваш адрес : </p>
                    </div>
                    <div>
                      { isAdmin &&
                        <Link to="../adminpanel">
                          <Button id="btn" variant="contained">
                            Войти в Админ-панель
                          </Button>
                        </Link>
                      }
                      <Link to="../">
                        <Button id="btn"
                                variant="contained"
                                onClick={()=> {
                                  context.resetUser();
                                  context.toggleAuth(false)
                                  Cookies.remove('token')}}>
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