import React from 'react';
import {useState, useEffect} from "react";
import { ErrorPage, MainPage, ProfilePage, QuestionsPage, SignInPage, SignUpPage, AdminPanelPage } from "./pages";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Api } from './context/Api';
import Cookies from 'js-cookie'
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const token = Cookies.get('token');

  const [state, setState] = useState({
    theme: 'dark',
    toggleTheme: () => setState(state => ({ ...state, theme: state.theme === 'dark' ? 'light' : 'dark', })),
    token: null,
    removeToken: () => setState( state => ({ ...state, token: null })),
    setToken: props => setState( state => ({ ...state, token: props })),
    user: {},
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
      theme: "dark",
    }),
    notifySuc: props => toast.success(props, {
      position: "top-right",
      autoClose: 2400,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      }),
  });

  const router = createBrowserRouter([
      {
          path: '/',
          errorElement: <ErrorPage />,
          children: [
              {
                  path: '',
                  errorElement: <ErrorPage />,
                  element: <MainPage />
              },
              {
                  path: 'signin',
                  errorElement: <ErrorPage />,
                  element: (state.isAuth) ? (
                    <ProfilePage />
                  ) : (
                    <>
                        <SignInPage />
                        <ToastContainer />
                    </>
                  )
              },
              {
                  path: 'signup',
                  errorElement: <ErrorPage />,
                  element: (state.isAuth) ? (
                        <ProfilePage />
                  ) : (
                    <>
                        <SignUpPage />
                        <ToastContainer />
                    </>
                  )
              },
              {
                  path: 'profile',
                  errorElement: <ErrorPage />,
                  element: (state.isAuth) ? (
                    <ProfilePage />
                  ) : (
                    <MainPage />
                  )
              },
              {
                  path: 'questions',
                  errorElement: <ErrorPage />,
                  element: <QuestionsPage />
              },
              {
                  path: 'admin-panel',
                  errorElement: <ErrorPage />,
                  element: (state.user.role === 'ADMIN') ? (
                      <AdminPanelPage />
                  ) : (
                      <MainPage />
                  )
              }
          ]
      }
  ])

  useEffect(()=>{
    if(typeof token === 'string') {
      const user = jwt_decode(token);
      if(JSON.stringify(state.user) === JSON.stringify({})) {
        state.toggleIsAuth(true);
        state.setToken(token);
        state.setUser(user);
      }
    }
  }, [state, token]);

  return (
      <Api.Provider value={state}>
          <RouterProvider router = {router} />
      </Api.Provider>
    )
}
