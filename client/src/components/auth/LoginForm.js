//* Dependencies
import { useState } from 'react';
import { withRouter } from 'react-router';

const LoginForm = (props) => {
  //* Initialize local state
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;

  return (
    <>
      <h3 className='subheader'>Login</h3>
      <form
      //  onSubmit={onSubmit}
      >
        <div className='form-group'>
          <label className='label'>Email</label>
          <input
            type='email'
            className='input'
            placeholder='you@somewhere.com'
            name='email'
            value={email}
            // onChange={onChange}
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
            // onChange={onChange}
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
