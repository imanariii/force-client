import {CategoriasCard, Header} from "../components";
import { Api } from '../context/Api'
import '../styles/main.css';
import {Button} from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MainPage (props) {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
      const getAllBrands = () => {
        axios.get('http://localhost:5000/api/category')
          .then(function (res) {
            setCategories(res.data)
          })
          .catch(err => {
            console.log(err)
          })
      }
      getAllBrands()
      // eslint-disable-next-line
    }, [])
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
                    <div className={`body__categories-${context.theme}`}>
                      <span>#1 в Ростове-На-Дону и одни из лучших в России</span>
                      <div className="categories-list container">
                        {categories && categories.map(category=>(
                          <CategoriasCard key={category.id} name={category.name} />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`wrapper__quest-prev-${context.theme}`}>
                    <div className={`body__quest-prev ${context.theme} container`}>
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
