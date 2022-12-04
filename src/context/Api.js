import { createContext } from "react";


export const Api = createContext({
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
  toggleIsAdmin: () => {}
});
