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
import Carts from "./Carts";

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
          element:
            <>
              <MainPage />
              <Carts />
            </>
        },
        {
          path: 'signin',
          errorElement: <ErrorPage />,
          element: (state.isAuth) ? (
            <>
              <ProfilePage />
              <ToastContainer />
              <Carts />
            </>
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
            <>
              <ProfilePage />
              <ToastContainer />
              <Carts />
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
            <>
              <ProfilePage />
              <ToastContainer />
              <Carts />
            </>
          ) : (
            <MainPage />
          )
        },
        {
          path: 'questions',
          errorElement: <ErrorPage />,
          element: <>
            <QuestionsPage />
            <Carts />
          </>
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
                  <Carts />
                </>
              ) : (
                <>
                  <MainPage />
                  <Carts />
                </>
              )
            }, {
              path: 'add-product',
              errorElement: <ErrorPage />,
              element: (state.user.role === 'ADMIN') ? (
                <>
                  <AddProducts />
                  <ToastContainer />
                  <Carts />
                </>
              ) : (
                <>
                  <MainPage />
                  <Carts />
                </>
              )
            }, {
              path: 'brands',
              errorElement: <ErrorPage />,
              element: (state.user.role === 'ADMIN') ? (
                <>
                  <Brands />
                  <ToastContainer />
                  <Carts />
                </>
              ) : (
                <>
                  <MainPage />
                  <Carts />
                </>
              )
            }, {
              path: 'category',
              errorElement: <ErrorPage />,
              element: (state.user.role === 'ADMIN') ? (
                <>
                  <Category />
                  <ToastContainer />
                  <Carts />
                </>

              ) : (
                <>
                  <MainPage />
                  <Carts />
                </>
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
                  <Carts />
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
                  <Carts />
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
                  <Carts />
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