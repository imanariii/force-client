import { Button } from "@mui/material";
import { ThemeContext } from '../context/Theme'

const CategoriasCard = (props) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className="wrapper__categories-card">
          <div className={`body__categories-card-${theme.theme}`}>
            <div className="categories-card-txt">
              <h3>Название категории</h3>
              <Button variant="contained">Перейти</Button>
              <p>Здесь должна распологаться информация о карточке категории.</p>
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default CategoriasCard;