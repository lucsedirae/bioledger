//* Dependencies
import { useState, useContext, useEffect } from 'react';
import { withRouter } from 'react-router';

//* Import auth context
import AuthContext from '../../context/authContext';

const RegisterForm = (props) => {
  //* Init auth context
  const authContext = useContext(AuthContext);
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/entry');
    }

    if (error === 'User already exists') {
      alert(error);
      clearErrors();
    }
  }, [error, isAuthenticated, props.history]);

  //* Init local state
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = user;

  //* Handle Form submission
  const onSubmit = async (e) => {
    e.preventDefault();

    if (name === '' || email === '' || password === '') {
      alert('Please enter all fields');
    } else if (password !== password2) {
      alert('Passwords do not match');
    } else {
      register({
        name,
        email,
        password,
      });
    }
    props.history.push('/entry');
  };

  //* Handle form input changes
  const onChange = (name) => (e) => {
    setUser({ ...user, [name]: e.target.value });
  };

  return (
    <>
      <h3 className='subheader'>Create an account</h3>

      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label className='label'>Name</label>
          <input
            type='text'
            className='input'
            placeholder='Your name'
            value={name}
            onChange={onChange('name')}
            name='name'
          />
        </div>
        <div className='form-group'>
          <label className='label'>Email</label>
          <input
            type='email'
            className='input'
            placeholder='you@somewhere.com'
            name='email'
            value={email}
            onChange={onChange('email')}
          />
        </div>
        <div className='form-group'>
          <label className='label'>Password</label>
          <input
            type='password'
            value={password}
            onChange={onChange('password')}
            className='input'
            placeholder='**********'
            name='password'
          />
        </div>
        <div className='form-group'>
          <label className='label'>Confirm Password</label>
          <input
            type='password'
            value={password2}
            onChange={onChange('password2')}
            className='input'
            placeholder='**********'
            name='password2'
          />
        </div>
        <div className='form-group'>
          <button className='btn' type='submit' value='Register'>
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default withRouter(RegisterForm);
