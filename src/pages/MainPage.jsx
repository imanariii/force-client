import {CategoriasCard, Header} from "../components";
import { Api } from '../context/Api'
import '../styles/main.css';
import {Button} from "@mui/material";
import { Link } from "react-router-dom";

export default function MainPage (props) {
    return (
        <>
          <Header />
          <Api.Consumer>
            {context => {
              return (
                <>
                  <div className={`wrapper__preview-${context.theme}`}>
                    <div className={`body__preview-${context.theme}`}>
                      {context.theme === 'light' ?
                        <h1 className="title">be first</h1> :
                        <h1 className="title">be strong</h1>
                      }
                      <div>
                        <Link to="../category"><Button variant="contained" id="btn">Перейти к каталогу</Button></Link>
                        { context.isAuth
                          ? <Link to="../profile"><Button variant="outlined" id="outlined">Войти в профиль</Button></Link>
                          : <Link to="../signup"><Button variant="outlined" id="outlined">Зарегистрироваться</Button></Link>
                        }
                      </div>
                    </div>
                  </div>

                  <div className={`wrapper__free-delivery-${context.theme}`}>
                    <div className={`body__free-delivery`}>
                      <span>Доставка по России и странам СНГ!</span>
                    </div>
                  </div>

                  <div className={`wrapper__categories-${context.theme}`}>
                    <div className={`body__categories-${context.theme} container`}>
                      <span>#1 в Ростове-На-Дону и одни из лучших в России</span>
                      <div className="categories-list">
                        <CategoriasCard />
                        <CategoriasCard />
                        <CategoriasCard />
                        <CategoriasCard />
                        <CategoriasCard />
                        <CategoriasCard />
                        <CategoriasCard />
                        <CategoriasCard />
                        <CategoriasCard />
                        <CategoriasCard />
                      </div>
                    </div>
                  </div>

                  <div className={`wrapper__quest-prev-${context.theme}`}>
                    <div className={`body__quest-prev container ${context.theme}`}>
                      <span>У вас есть вопросы?</span>
                      <span>возможно мы ответили на ваш вопрос в блоке</span>
                      <span>ответов на вопросы</span>
                      <Link to="questions"><Button id="btn" variant="contained">Перейти</Button></Link>
                    </div>
                  </div>
                </>
              )}}
          </Api.Consumer>
          <Header />
        </>
    )
}
