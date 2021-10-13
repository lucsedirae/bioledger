//* Dependencies
import { useContext } from 'react';

//* Custom components
import Layout from '../layout/Layout';
import Welcome from '../layout/Welcome';

//* Import auth context
import { AuthContext } from '../../context/authContext';

export default function Progress() {
  //* Init auth context
  const { authUser } = useContext(AuthContext);

  // Authenticate user
  authUser();

  // If user is authenticated, display user metric data to charts

  return (
    <>
      <Layout>
        <Welcome />
      </Layout>
    </>
  );
}
