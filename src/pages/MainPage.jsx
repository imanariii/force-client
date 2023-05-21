import {CategoriasCard, Header} from "../components";
import { Api } from '../context/Api'
import '../styles/main.css';
import {Button} from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import FetchGetAllCategorias from "../utils/FetchGetAllCategorias";
import React from "react";

export default function MainPage (props) {
    const state = useContext(Api)
    const [categorias, setCategorias] = useState([])
    useEffect(()=>{
      FetchGetAllCategorias(setCategorias, state)
    }, [state])

    return (
        <>
          <Header />
          <main className={state.theme}>
          <div className={`wrapper__preview-${state.theme}`}>
            <div className={`body__preview-${state.theme}`}>
              <div className="glass">
                {state.theme === 'light' ?
                  <h1 className="title">be first</h1> :
                  <h1 className="title">be strong</h1>
                }
                <div className="btns">
                  <Link to="../category/sneaks"><Button variant="contained" id="btn">Перейти к каталогу</Button></Link>
                  { state.isAuth
                    ? <Link to="../profile"><Button variant="outlined" id="outlined">Войти в профиль</Button></Link>
                    : <Link to="../signup"><Button variant="outlined" id="outlined">Зарегистрироваться</Button></Link>
                  }
                </div>
              </div>
              <div className='ipgone-insta'>

              </div>
            </div>
          </div>
                  <div className={`wrapper__free-delivery-${state.theme}`} style={{
                    backgroundImage: "url('https://sun9-5.userapi.com/impg/kyfkrVVSG_ZHLq7t8H_nvRCx9Rpwb6f4kkDeyQ/gewWKJp4gfM.jpg?size=316x106&quality=96&sign=82b88ec29eedbe442b766f0d9097eb75&type=album')",
                    position: 'relative',
                    top: '6%',
                    zIndex: '0'}}>
                    <div className={`body__free-delivery`}>
                      <span>Доставка по России и странам СНГ!</span>
                    </div>
                  </div>



          <div className={`wrapper__categories-${state.theme}`}>
            <div className={`body__categories-${state.theme}`}>
              <span className="categories-title">#1 в Ростове-На-Дону и одни из лучших в России</span>
              <div className="categories-list container">
                {categorias && categorias.map(category=>(
                    <CategoriasCard key={category.id} name={category.name} description={category.description} />
                ))}
              </div>
            </div>


            <div className={`wrapper__quest-prev-${state.theme}`}>
            <div className={`body__quest-prev ${state.theme} container`}>
              <span>У вас есть вопросы?</span>
              <span>возможно мы ответили на ваш вопрос в блоке</span>
              <span>ответов на вопросы</span>
              <Link to="questions"><Button id="btn" variant="contained">Перейти</Button></Link>
            </div>
            </div>
          </div>
          </main>
          <Header />
        </>
    )
}
