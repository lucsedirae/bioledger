//* Dependencies
import { useState } from 'react';
import { withRouter } from 'react-router';

const RegisterForm = (props) => {
  //* Defines local state
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = user;

  return (
    <>
      <h3 className='subheader'>Create an account</h3>

      <form
      //  onSubmit={onSubmit}
      >
        <div className='form-group'>
          <label className='label'>Name</label>
          <input
            type='text'
            className='input'
            placeholder='Your name'
            value={name}
            // onChange={onChange}
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
            // onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label className='label'>Password</label>
          <input
            type='password'
            value={password}
            // onChange={onChange}
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
            // onChange={onChange}
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
