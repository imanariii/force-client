import { createContext } from "react";


export const Api = createContext({
  theme: 'light',
  toggleTheme: () => {},
  user: {},
  setUser: () => {},
  resetUser: () => {},
  createNotification: () => {}
});
