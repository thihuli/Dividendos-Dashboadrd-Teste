import { createContext } from 'react';

const AppContext = createContext({
  token: null,
  setToken: () => {}
});


export default AppContext;