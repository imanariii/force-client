import { createContext } from "react";


export const Api = createContext({
  theme: 'dark',
  toggleTheme: () => {},
  user: {},
  setUser: () => {},
  resetUser: () => {},
  notifyErr: () => {},
  notifySuc: () => {},
  isAuth: false
});
