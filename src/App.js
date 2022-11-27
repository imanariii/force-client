import React from 'react';
import { ErrorPage, MainPage, ProfilePage, QuestionsPage, SignInPage, SignUpPage } from "./page";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { ThemeContext } from './context/Theme';

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

export class App extends React.Component {
    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                  state.theme === 'dark'
                    ? 'light'
                    : 'dark',
            }));
        };

        this.state = {
            theme: 'light',
            toggleTheme: this.toggleTheme
        };
    }

    render() {
        return (
          <ThemeContext.Provider value={this.state}>
              <RouterProvider router = {router} />
          </ThemeContext.Provider>
        )
    }
}