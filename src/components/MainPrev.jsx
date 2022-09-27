import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
function MainPrev() {
  return (
    <section className="mainprev__wrapper">
      <div className="mainprev__body">
        <span className="mainprev-title">We empower the world's greatest tournaments
          and
          athletes</span>
        <div className="mainprev-btns">
            <Link to="/categorias"><Button variant="contained">Перейти к каталогу</Button></Link>
            <Button variant="outlined">Зарегистрироваться/Авторизораваться</Button>
        </div>
      </div>
    </section>
  )
}

export default MainPrev;