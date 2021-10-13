//* Dependencies
import { useState } from 'react';
import { withRouter } from 'react-router';
import { AuthContext } from './authContext';

const AuthState = (props) => {
  //* Define initial context state
  const [isAuth, setIsAuth] = useState(false);

  function authUser() {
    //* Init auth context
    // const { setIsAuth } = useContext(AuthContext);
    const token = localStorage.getItem('token');
    //! Need a better way to confirm token
    if (token) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
      props.history.push('/login');
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        authUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default withRouter(AuthState)
