import {CategoriasCard, Footer, Header} from "../components";
import { Api } from '../context/Api'
import '../styles/main.css';
import {Button} from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import FetchGetAllCategorias from "../utils/FetchGetAllCategorias";
const styleButton = {
  color: 'white',
}
export default function MainPage (props) {
    const state = useContext(Api)
    const [categorias, setCategorias] = useState([])
    useEffect(()=>{
      FetchGetAllCategorias(setCategorias, state)
    }, [state.categorias])

    return (
        <>
          <Header />
          <main className={state.theme}>
          <div className={`wrapper__preview-${state.theme}`}>
            <div className={`body__preview-${state.theme}`}>
              <div className="glass">
                {state.theme === 'light' ?
                  <h1 className="title">be fisrt</h1> :
                  <h1 className="title">be force</h1>
                }
                <span style={{fontSize: '18px', fontWeight: '900', width: '80%'}}>Force - магазин спортивной одежды, мы поможем полюбить вас спорт и сделать его комфортным.</span>
                <div className="btns">
                  <Link to="../category/sneaks"><Button size="large" variant="contained">Перейти к каталогу</Button></Link>
                  { state.isAuth
                    ? <Link to="../profile"><Button size="large" variant="contained">Войти в профиль</Button></Link>
                    : <Link to="../signup"><Button  size="large" variant="contained">Зарегистрироваться</Button></Link>
                  }
                </div>
              </div>
              <div className='ipgone-insta'>

              </div>
            </div>
          </div>
                  <div className={`wrapper__free-delivery-${state.theme}`} style={{
                        backgroundImage: "url(../assets/bg.jpg')",
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
          <Footer />
        </>
    )
}
