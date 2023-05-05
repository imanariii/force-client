import { createContext } from "react";


export const Api = createContext({
  address: 'http://194.58.107.227:5000/api',
  theme: 'dark',
  toggleTheme: () => {},
  user: {},
  setUser: () => {},
  resetUser: () => {},
  notifyErr: () => {},
  notifySuc: () => {},
  token: null,
  removeToken: () => {},
  setToken: () => {},
  isAuth: false,
  toggleIsAuth: () => {},
  isAdmin: false,
  toggleIsAdmin: () => {},
  cards: [],
  setCards: () => {},
});