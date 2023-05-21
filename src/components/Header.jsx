import {IconButton} from "@mui/material";
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Api } from '../context/Api'
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

export default function Header (props) {
    const state = useContext(Api)
    const [count,setCount] = useState(0)
    useEffect(()=>{
      let res = 0
      state.cards.map(card=>res += card.count)
      setCount(res)
    }, [state.cards])

    return (
      <>
        <header className={`header ${state.theme}`}>
          <div className='header__body container'>
            <Link className="logo" to="../../">force</Link>
            <nav>
              <IconButton color={state.theme === 'light' ? 'secondary' : 'success'} onClick={state.toggleTheme}>
                {state.theme === 'light' ?
                  <DarkModeTwoToneIcon /> :
                  <LightModeTwoToneIcon />
                }
              </IconButton>
                {state.token && (
                  <>
                    <Link className="logo" to="../../profile">
                      <IconButton color={state.theme === 'light' ? 'secondary' : 'success'}>
                        <AccountCircleIcon />
                      </IconButton>
                    </Link>
                    <Link>
                      <IconButton color={state.theme === 'light' ? 'secondary' : 'success'}>
                        <ShoppingCartTwoToneIcon onClick={()=>state.setCartsShowState(true)} />
                      </IconButton>
                      <span className={`cart-count ${state.theme}`}>{count}</span>
                    </Link>
                  </>

                )}

            </nav>
          </div>
        </header>
      </>
    )
}