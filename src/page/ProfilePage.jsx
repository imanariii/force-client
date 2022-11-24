import { Header} from "../components";
import React from "react";
import '../styles/profile.css';
import { Button, Link } from "@mui/material";
import Cookies from 'js-cookie';

const ProfilePage = () => {
    const email = Cookies.get('email');
    return (
        <>
            <Header />
            <main>
                <div className="profile__wrapper">
                    <div className="profile__body">
                        <h1>Profile</h1>
                        <div className="profile-content">
                          <div>
                            <p className="content-title">Ваш E-mail : {email}</p>
                            <p className="content-name">Ваше ФИО : </p>
                            <p className="content-role">Ваша роль : </p>
                            <p className="content-address">Ваш адрес : </p>
                          </div>
                          <div>
                            <Link href="../"><Button variant="contained">Выйти из аккаунта</Button></Link>
                          </div>
                        </div>
                    </div>
                </div>
            </main>
            <Header />
        </>
    )
}

export default ProfilePage;