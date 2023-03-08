import { createBrowserRouter } from "react-router-dom";
import {
  AdminPanelPage,
  CategoryPage,
  ErrorPage,
  MainPage,
  ProfilePage,
  QuestionsPage,
  SignInPage,
  SignUpPage
} from "../pages";
import { ToastContainer } from "react-toastify";
import React from "react";

const Router = (state)=>{
  return (
  createBrowserRouter([
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
          path: 'category',
          errorElement: <ErrorPage />,
          element: (state.isAuth) ? (
            <>
              <CategoryPage />
              <ToastContainer />
            </>
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
            <>
              <AdminPanelPage />
              <ToastContainer />
            </>
          ) : (
            <MainPage />
          )
        }
      ]
    }
  ]))
}

export default Router;