import { Button } from "@mui/material";
import { Link } from 'react-router-dom'
import { Api } from '../context/Api';
import CheckroomIcon from '@mui/icons-material/Checkroom';


const CategoriasCard = ({id, name, description}) => {
  return (
    <Api.Consumer>
      {context => (
        <div className="wrapper__categories-card">
          <div className={`body__categories-card-${context.theme}`}>
            <div className={`caregory-ddnt-hover`}>
              <CheckroomIcon style={{width: '100px', height: '100px' }} />
              <h1>{description}</h1>
            </div>

            <div className="categories-card-txt">
              <h3>{description}</h3>
              <Link to={`../category/${name}`}><Button id="btn" variant="contained">Перейти</Button></Link>
            </div>
          </div>
        </div>
      )}
    </Api.Consumer>
  )
}

export default CategoriasCard;