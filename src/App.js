import React, {useReducer} from 'react';
import { ErrorPage, MainPage, ProfilePage, QuestionsPage, SignInPage, SignUpPage } from "./page";
import { Notification } from "./components";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { User } from './User';

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
                element: <SignInPage />
            },
            {
                path: 'signup',
                errorElement: <ErrorPage />,
                element: <SignUpPage />
            },
            {
                path: 'profile',
                errorElement: <ErrorPage />,
                element: <ProfilePage />
            },
            {
                path: 'questions',
                errorElement: <ErrorPage />,
                element: <QuestionsPage />
            }
        ]
    }
])
export const initialState = {
    user: {
        id: null,
        email: null,
        roles: null,
        address: null
    },
    notification: {
        type: null,
        show: false,
        message: null
    }
}

export const resetState = (state) => state;

export const userReducer = (state, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            console.log('SIGN_IN')
            return {
                user: {
                    ...state.user,
                    id: action.payload.id,
                    email: action.payload.email,
                    roles: action.payload.roles
                }
            }
        case 'EDIT_ADDRESS':
            console.log('EDIT_ADDRESS')
            return {
                user: {
                    ...state.user,
                    address: action.payload.address
                }
            };
        case 'SHOW_NOTIFICATION':
            console.log('SHOW_NOTIFICATION')
            return {
                notification: {
                    ...state.notification,
                    type: action.payload.type,
                    message: action.payload.message,
                    show: true
                }
            }
        case 'HIDE_NOTIFICATION':
            console.log('HIDE_NOTIFICATION')
            return {
                notification: {
                    ...state.notification,
                    type: null,
                    message: null,
                    show: false
                }
            }
        default:
            console.log('Default Case')
    }
}
export const App = () => {
    const [state, dispatch] = useReducer(userReducer, initialState, resetState)
    return (
      <User.Provider value={{state, dispatch}}>
          <RouterProvider router = {router} />
      </User.Provider>
    )
}