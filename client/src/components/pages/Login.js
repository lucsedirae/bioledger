//* Dependencies
import {Link} from 'react-router-dom'

//* Custom components
import Layout from '../layout/Layout';
import LoginForm from '../auth/LoginForm';

export default function Login() {
  //* Import global auth context

  // Send user login info to back end

  // Redirect to entry page upon successful authentication
  
  return (
    <>
      <Layout>
        <h3 className='subheader'>Please login to your account </h3>
        <LoginForm />
        <div style={{ padding: '.5rem' }}>
        <Link to='/register'>Create an account</Link>
      </div>

      </Layout>
    </>
  );
}
