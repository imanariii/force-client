import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: '#282828',
        },
    },
});

function ButtonDone({cart, id, name, price, img, count, addNewCart}) {
    if (cart.length === 0) {
        return (
            <ThemeProvider theme={theme}>
                <Link to="/cart">
                    <Button
                        className="card-btn"
                        onClick={() => {
                            addNewCart({id, name, price, img, count});
                        }}>
                        Добавить товар в корзине
                    </Button>
                </Link>
            </ThemeProvider>
        )
    } else {
        const getCart = cart.find(obj => obj.id === id);
        if(getCart) {
            return (
                <ThemeProvider theme={theme}>
                    <Link to="/cart">
                        <Button className="card-btn">
                            Товар уже в корзине
                        </Button>
                    </Link>
                </ThemeProvider>
            )
        } else  {
            return (
                <ThemeProvider theme={theme}>
                    <Link to="/cart">
                        <Button
                            className="card-btn"
                            onClick={() => {
                                addNewCart({id, name, price, img, count});
                            }}>
                            Добавить товар в корзине
                        </Button>
                    </Link>
                </ThemeProvider>
            )
        }
    }
}

export default ButtonDone;