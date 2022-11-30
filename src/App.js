import React from 'react';
import {useState, useEffect} from "react";
import { ErrorPage, MainPage, ProfilePage, QuestionsPage, SignInPage, SignUpPage } from "./page";

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
        const token = Cookies.get('token')
        const toggleTheme = () => {
            setState(state => ({
                ...state,
                theme:
                  state.theme === 'dark'
                    ? 'light'
                    : 'dark',
            }));
        };

        const setUser = (props) => {
            setState(state => ({
                ...state,
                user: props
            }));
        };

        const resetUser = () => {
            setState( state => ({
                ...state,
                user: {}
            }))
        }

        const notifyErr = (props) => {
          toast.error(props, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })
        }
        const notifySuc = (props) => {
          toast.success(props, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })
        }
        const toggleAuth = (props) => {
            setState( state => ({
              ...state,
              isAuth: props
            }))
        }
        const [state, setState] = useState({
            theme: 'dark',
            isAuth: false,
            toggleAuth: toggleAuth,
            toggleTheme: toggleTheme,
            user: {},
            setUser: setUser,
            resetUser: resetUser,
            notifyErr: notifyErr,
            notifySuc: notifySuc
        });

  useEffect(()=>{
    if(typeof token === 'string') {
      const user = jwt_decode(token);
      if(JSON.stringify(state.user) === JSON.stringify({})) {
        state.toggleAuth(true)
        state.setUser(user);
      }
    }
  }, [state, token]);

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
                    element: (typeof token === 'string') ? (
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
                    element: (typeof token === 'string') ? (
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
                }
            ]
        }
    ])
    return (
      <Api.Provider value={state}>
          <RouterProvider router = {router} />
      </Api.Provider>
    )
}
