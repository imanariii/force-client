import { createBrowserRouter } from "react-router-dom";
import {
  ErrorPage,
  MainPage,
  ProfilePage,
  QuestionsPage,
  SignInPage,
  SignUpPage
} from "../pages";
import { ToastContainer } from "react-toastify";
import React from "react";
import { Brands, Category, Products, AddProducts } from "../pages/AdminPanelPage";
import { Hoodie, Sneaks, Trousers } from "../pages/CategoryPage";

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
          children: [{
              path: 'products',
              errorElement: <ErrorPage />,
              element: (state.user.role === 'ADMIN') ? (
                <>
                  <Products />
                  <ToastContainer />
                </>
              ) : (
                <MainPage />
              )
            }, {
              path: 'add-product',
              errorElement: <ErrorPage />,
              element: (state.user.role === 'ADMIN') ? (
                <>
                  <AddProducts />
                  <ToastContainer />
                </>
              ) : (
                <MainPage />
              )
            }, {
              path: 'brands',
              errorElement: <ErrorPage />,
              element: (state.user.role === 'ADMIN') ? (
                <>
                  <Brands />
                  <ToastContainer />
                </>
              ) : (
                <MainPage />
              )
            }, {
              path: 'category',
              errorElement: <ErrorPage />,
              element: (state.user.role === 'ADMIN') ? (
                <>
                  <Category />
                  <ToastContainer />
                </>

              ) : (
                <MainPage />
              ),
            }
          ]
        },
        {
          path: 'category',
          errorElement: <ErrorPage />,
          children: [
            {
              path: 'sneaks',
              errorElement: <ErrorPage />,
              element: (
                <>
                  <Sneaks />
                  <ToastContainer />
                </>
              )
            },
            {
              path: 'trousers',
              errorElement: <ErrorPage />,
              element: (
                <>
                  <Trousers />
                  <ToastContainer />
                </>
              )
            },
            {
              path: 'hoodie',
              errorElement: <ErrorPage />,
              element: (
                <>
                  <Hoodie />
                  <ToastContainer />
                </>
              )
            }
          ]
        }
      ]
    }
  ]))
}

export default Router;