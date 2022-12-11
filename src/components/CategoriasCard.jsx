import { Button } from "@mui/material";
import { Link } from 'react-router-dom'
import { Api } from '../context/Api'

const CategoriasCard = ({id, name}) => {
  return (
    <Api.Consumer>
      {context => (
        <div className="wrapper__categories-card">
          <div className={`body__categories-card-${context.theme}`}>
            <div className="categories-card-txt">
              <h3>{name}</h3>
              <Link to="../category"><Button id="btn" variant="contained">Перейти</Button></Link>
            </div>
          </div>
        </div>
      )}
    </Api.Consumer>
  )
}

export default CategoriasCard;