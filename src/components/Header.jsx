import {IconButton} from "@mui/material";
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import { Api } from '../context/Api'
import { Link } from "react-router-dom";

export default function Header (props) {
    return (
      <Api.Consumer>
        {({theme, toggleTheme, user }) => {
          return (
            <header className={`${theme}`}>
              <div className='header__body container'>
                <Link className="logo" to="../">force</Link>
                <IconButton color={theme === 'light' ? 'secondary' : 'success'} onClick={toggleTheme}>
                  {theme === 'light' ?
                    <DarkModeTwoToneIcon /> :
                    <LightModeTwoToneIcon />
                  }
                </IconButton>
              </div>
            </header>
          )
        }
        }
      </Api.Consumer>
    )
}