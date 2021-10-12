//* Dependencies
import { useState } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';

const RegisterForm = (props) => {
  //* Defines local state
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
    // Define header configuration for API call
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      // Send local user state to back end and create user in DB.
      const res = await axios.post('api/users', user, config);
      // Store token in localstorage
      localStorage.setItem('token', res.data.token);
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
