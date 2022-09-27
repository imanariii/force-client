import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
function MainPrev() {
  return (
    <section className="mainprev__wrapper">
      <div className="mainprev__body">
        <span className="mainprev-title">We empower the world's greatest tournaments
          and
          athletes</span>
        <div className="mainprev-btns">
          <Stack spacing={2} direction="row">
            <Link to="/categorias"><Button variant="contained">Перейти к каталогу</Button></Link>
            <Button variant="outlined">Зарегистрироваться/Авторизораваться</Button>
          </Stack>
        </div>
      </div>
    </section>
  )
}

export default MainPrev;
