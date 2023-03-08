import {IconButton} from "@mui/material";
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import { Api } from '../context/Api'
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function Header (props) {
    const state = useContext(Api)
    return (
      <>
        <header className={`${state.theme}`}>
          <div className='header__body container'>
            <Link className="logo" to="../">force</Link>
            <IconButton color={state.theme === 'light' ? 'secondary' : 'success'} onClick={state.toggleTheme}>
              {state.theme === 'light' ?
                <DarkModeTwoToneIcon /> :
                <LightModeTwoToneIcon />
              }
            </IconButton>
          </div>
        </header>
      </>
    )
}