//* Dependencies
import { useState, useContext } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';

//* Import auth context
import { AuthContext } from '../../context/authContext';

const LoginForm = (props) => {
  //* Init auth context
  const { setIsAuth, authUser } = useContext(AuthContext);

  //* Initialize local state
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;

  //* Handle Form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    // Define header configuration for API call
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      // Send local user state to back end and create user in DB.
      const res = await axios.post('api/auth', user, config);
      // Store token in localstorage
      localStorage.setItem('token', res.data.token);
      // Clear user local state
      setUser({
        email: '',
        password: '',
      });
      // Set authentication status to true
      authUser()
      // Redirect user to entry page
      props.history.push('/entry');
    } catch (err) {
      // Alert the error msg to user if an error is caught
      alert(
        `Error: ${err.response.data.msg} status code: ${err.response.status}`
      );
    }
  };

  //* Handle form input changes
  const onChange = (name) => (e) => {
    setUser({ ...user, [name]: e.target.value });
  };

  return (
    <>
      <h3 className='subheader'>Login</h3>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label className='label'>Email</label>
          <input
            type='email'
            className='input'
            placeholder='you@somewhere.com'
            name='email'
            value={email}
            onChange={onChange('email')}
            required
          />
        </div>
        <div className='form-group'>
          <label className='label'>Password</label>
          <input
            type='password'
            className='input'
            placeholder='**********'
            name='password'
            value={password}
            onChange={onChange('password')}
            required
          />
        </div>
        <div className='form-group'>
          <button className='btn' type='submit' value='Login'>
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default withRouter(LoginForm);
