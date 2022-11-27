import {Link, IconButton} from "@mui/material";
import Fingerprint from '@mui/icons-material/Fingerprint';
import { ThemeContext } from '../context/Theme'

export default function Header (props) {
    return (
      <ThemeContext.Consumer>
        {({theme, toggleTheme }) => (
          <header className={`${theme}`}>
              <div className='header__body container'>
                  <Link className="logo" href="../">force</Link>
                  <IconButton aria-label="fingerprint" color={theme === 'light' ? 'secondary' : 'success'} onClick={toggleTheme}>
                    <Fingerprint />
                  </IconButton>
              </div>
          </header>
        )}
      </ThemeContext.Consumer>
  )
}