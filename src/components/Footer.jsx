import { Api } from '../context/Api'
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function Footer () {
    const state = useContext(Api)
    return (
        <>
            <footer className={`header ${state.theme}`} style={{textAlign: 'center'}}>
                <div className='header__body container'>
                    <Link className="logo" to="../../">force</Link>
                    <a href='https://t.me/shark_69kg'>Created by @imanariii</a>
                </div>
            </footer>
        </>
    )
}