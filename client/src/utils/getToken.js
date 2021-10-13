//* Dependencies
import { useContext } from 'react';

//* Import auth context
import { AuthContext } from '../context/authContext';

export function getToken() {
  //* Init auth context
  // const { setIsAuth } = useContext(AuthContext);
const token = localStorage.getItem('token')
console.log(token)
}