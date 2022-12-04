import { Header } from "../components";
import { Api } from '../context/Api';
import '../styles/sign.css';
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import catGif from '../assets/error_cat.gif'
export default function ErrorPage () {
    const navigate = useNavigate();
    return (
      <Api.Consumer>
        {context => (
          <>
            <Header />
            <main>
              <div className={`sign__wrapper-${context.theme}`}>
                <div className={`error__body`}>
                  <img src={catGif} alt="Loading..." />
                  <div>
                    <h1>Извините : (</h1>
                    <h3>произошла ошибка или страницы не существует.</h3>
                    <br/>
                  </div>
                  <Button id="btn" variant='contained' onClick={()=>navigate(-1)}>Вернуться назад</Button>
                </div>
              </div>
            </main>
            <Header />
          </>
        )}
      </Api.Consumer>
    )
}
