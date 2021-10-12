//* Dependencies
import { Link } from 'react-router-dom';

//* Custom components
import Layout from '../layout/Layout';
import RegisterForm from '../auth/RegisterForm';
export default function Register() {
  //* Import global auth context

  // Send new user info to back end

  // Load user and redirect to entry page upon successful authentication
  
  return (
    <>
      <Layout>
        <RegisterForm />
        <div style={{ padding: '.5rem' }}>
          <Link to='/login'>Login</Link>
        </div>
      </Layout>
    </>
  );
}
