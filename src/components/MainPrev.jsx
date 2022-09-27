import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
function MainPrev() {
  return (
    <section className="mainprev__wrapper">
      <div className="mainprev__body">
        <span className="mainprev-title">We empower the world's greatest tournaments
          and
          athletes</span>
        <div className="mainprev-btns">
          <Stack spacing={2} direction="row">
            <Button variant="contained">
              <Link to="/categorias">Перейти к каталогу</Link>
            </Button>
            <Button variant="outlined">Зарегистрироваться/Авторизораваться</Button>
          </Stack>
        </div>
      </div>
    </section>
  )
}

export default MainPrev;
