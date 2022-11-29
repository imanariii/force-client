import {Link, IconButton} from "@mui/material";
import Fingerprint from '@mui/icons-material/Fingerprint';
import { Api } from '../context/Api'

export default function Header (props) {
    return (
      <Api.Consumer>
        {({theme, toggleTheme, user }) => {
          return (
            <header className={`${theme}`}>
              <div className='header__body container'>
                <Link className="logo" href="../">force</Link>
                <IconButton aria-label="fingerprint" color={theme === 'light' ? 'secondary' : 'success'} onClick={toggleTheme}>
                  <Fingerprint />
                </IconButton>
              </div>
            </header>
          )
        }
        }
      </Api.Consumer>
    )
}