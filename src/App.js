import React from 'react';
import {useState, useEffect} from "react";
import { RouterProvider } from "react-router-dom";
import { Api } from './context/Api';
import Cookies from 'js-cookie'
import jwt_decode from "jwt-decode";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from "./components/Router";
import FetchGetOneUser from "./utils/FetchGetOneUser";
import { ParallaxProvider } from "react-scroll-parallax";

export function App() {
  const token = Cookies.get('token');
  const [state, setState] = useState({
    address: 'https://force-rnd.ru/api',
    theme: 'dark',
    toggleTheme: () => setState(state => ({ ...state, theme: state.theme === 'dark' ? 'light' : 'dark', })),
    token: null,
    removeToken: () => setState( state => ({ ...state, token: null })),
    setToken: props => setState( state => ({ ...state, token: props })),
    user: {},
    setAddress: props => setState(state=>({...state, user: state.user.address=props})),
    setUser: props => setState(state => ({ ...state, user: props })),
    resetUser:  () => setState( state => ({ ...state, user: {} })),
    isAuth: false,
    toggleIsAuth: props => setState( state => ({...state, isAuth: props })),
    notifyErr: props => toast.error(props, {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: state.theme,
    }),
    notifySuc: props => toast.success(props, {
      position: "top-right",
      autoClose: 2400,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: state.theme,
      }),
    cards: [],
    AddCartItem: props => setState(state => ({...state, cards: [...state.cards, props]})),
    EditCountCartItem: props => setState(state => ({...state, cards: props})),
    RemoveCartItem: props => setState(state => ({...state, cards: props})),
    cartsShowState: false,
    setCartsShowState: props => setState(state => ({...state, cartsShowState: props})),
  });

  Router(state)

  useEffect(()=>{
    if(typeof token === 'string') {
      const user = jwt_decode(token);
      if(JSON.stringify(state.user) === JSON.stringify({})) {
        state.toggleIsAuth(true);
        state.setToken(token);
        FetchGetOneUser(user.id, state)
      }
    }
  }, [state, token, setState]);
  return (
      <Api.Provider value={state}>
          <RouterProvider router = {Router(state)} />
      </Api.Provider>
    )
}
