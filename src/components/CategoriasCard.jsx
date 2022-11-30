import { Button } from "@mui/material";
import { Api } from '../context/Api'

const CategoriasCard = (props) => {
  return (
    <Api.Consumer>
      {context => (
        <div className="wrapper__categories-card">
          <div className={`body__categories-card-${context.theme}`}>
            <div className="categories-card-txt">
              <h3>Название категории</h3>
              <Button id="btn" variant="contained">Перейти</Button>
              <p>Здесь должна распологаться информация о карточке категории.</p>
            </div>
          </div>
        </div>
      )}
    </Api.Consumer>
  )
}

export default CategoriasCard;