import React, { createContext } from 'react';

import useStorage from '../../utils/useStorage';
import AppContext from './AppContext';

function AuthProvider({children}) {
  const [token, setToken] = useStorage('token');
  
  return (
    <AppContext.Provider 
      value ={
        {
          token,
          setToken
        }
      }
    >
      {children}
    </AppContext.Provider>
  );
}

export default AuthProvider;