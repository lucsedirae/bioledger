//* Dependencies
import {Link} from 'react-router-dom'

//* Custom components
import Layout from '../layout/Layout';
import LoginForm from '../auth/LoginForm';

export default function Login() {
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
