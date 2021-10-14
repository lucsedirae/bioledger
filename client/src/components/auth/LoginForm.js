//* Dependencies
import { useState, useContext, useEffect } from 'react';
import { withRouter } from 'react-router';

//* Import context
import AuthContext from '../../context/authContext';

const LoginForm = (props) => {
  const authContext = useContext(AuthContext);
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/entry');
    }

    if (error === 'Invalid Credentials') {
      alert(error);
      clearErrors();
    }
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;

  //* Handle Form submission
  const onSubmit = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      alert('Please fill in all fields');
    } else {
      login({
        email,
        password,
      });
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
