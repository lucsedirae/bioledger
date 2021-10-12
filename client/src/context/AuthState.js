import { AuthContext } from './authContext';
import axios from 'axios';

export const AuthState = (props) => {
  //* Define initial context state
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const register = async (formData) => {
    //* Defines headers passed with API req
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      //* Sets the result to the returned response from API after passing the data from register form and headers
      const res = await axios.post('api/users', formData, config);
      
      
    } catch (err) {}
  };

  return (
    <AuthContext.Provider
      value={
        {
          // token: state.token,
          // isAuthenticated: state.isAuthenticated,
          // loading: state.loading,
          // user: state.user,
          // error: state.error,
          // register,
          // loadUser,
          // login,
          // logout,
          // clearErrors,
        }
      }
    >
      {props.children}
    </AuthContext.Provider>
  );
};
