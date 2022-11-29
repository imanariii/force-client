import {CategoriasCard, Header} from "../components";
import { Api } from '../context/Api'
import '../styles/main.css';
import {Button, Link} from "@mui/material";

export default function MainPage (props) {
    return (
        <>
          <Header />
          <Api.Consumer>
            {context => {
              return (
                <>
                  <div className={`wrapper__preview`}>
                    <div className={`body__preview-${context.theme}`}>
                      <h1>be first, be strong</h1>
                      <div>
                        <Button variant="contained">Перейти к каталогу</Button>
                        <Button variant="outlined"><Link href="signup">Зарегистрироваться</Link></Button>
                      </div>
                    </div>
                  </div>

                  <div className={`wrapper__free-delivery-${context.theme}`}>
                    <div className={`body__free-delivery`}>
                      <span>Доставка по России и странам СНГ!</span>
                    </div>
                  </div>

                  <div className="wrapper__categories">
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
                      </div>
                    </div>
                  </div>

                  <div className="wrapper__quest-prev">
                    <div className={`body__quest-prev container ${context.theme}`}>
                      <span>У вас есть вопросы?</span>
                      <span>возможно мы ответили на ваш вопрос в блоке</span>
                      <span>ответов на вопросы</span>
                      <Link href="questions"><Button variant="contained">Перейти</Button></Link>
                    </div>
                  </div>
                </>
              )}}
          </Api.Consumer>
          <Header />
        </>
    )
}
