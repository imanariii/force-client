import { Header} from "../components";
import React from "react";
import '../styles/profile.css';
import { Button, Link } from "@mui/material";
import Cookies from 'js-cookie';
import { Api } from '../context/Api'

const ProfilePage = () => {
    return (
      <Api.Consumer>
        {context => (
          <>
            <Header />
            <main>
              <div className="profile__wrapper">
                <div className="profile__body">
                  <h1>Profile</h1>
                  <div className="profile-content">
                    <div>
                      <p className="content-title">Ваш E-mail : {context.user.email}</p>
                      <p className="content-role">Ваша роль : {(context.user.roles.length === 0) ? 'Пользователь' : 'Администратор'}</p>
                      <p className="content-address">Ваш адрес : </p>
                    </div>
                    <div>
                      <Link href="../"><Button variant="contained" onClick={()=> {
                        context.resetUser();
                        Cookies.remove('token')
                      }}>Выйти из аккаунта</Button></Link>
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