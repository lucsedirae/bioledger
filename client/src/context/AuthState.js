//* Dependencies
import { useState } from 'react';
import { AuthContext } from './authContext';

export const AuthState = (props) => {
  //* Define initial context state
  const [isAuth, setIsAuth] = useState(false);


  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
