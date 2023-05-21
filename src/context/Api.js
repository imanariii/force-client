import { createContext } from "react";


export const Api = createContext({
  address: 'https://force-rnd.ru/api',
  setAddress: () => {
  },
  theme: 'dark',
  toggleTheme: () => {
  },
  user: {},
  setUser: () => {
  },
  resetUser: () => {
  },
  notifyErr: () => {
  },
  notifySuc: () => {
  },
  token: null,
  removeToken: () => {
  },
  setToken: () => {
  },
  isAuth: false,
  toggleIsAuth: () => {
  },
  isAdmin: false,
  toggleIsAdmin: () => {
  },
  cards: [],
  EditCountCartItem: () => {
  },
  AddCartItem: () => {
  },
  RemoveCartItem: () => {

  },
  cartsShowState: false,
  setCartsShowState: () => {}
});