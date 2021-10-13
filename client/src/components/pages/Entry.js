//* Dependencies
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { getToken } from '../../utils/getToken';

//* Custom components
import Complete from '../metrics/Complete';
import EntryForm from '../metrics/EntryForm';
import Layout from '../layout/Layout';
import Welcome from '../layout/Welcome';

//* Import auth context
import { AuthContext } from '../../context/authContext';

export default function Entry(props) {
  //* Init auth context
  const { authUser } = useContext(AuthContext);

  // Authenticate user
  authUser();

  // If user is authenticated check context state to see if today's date has an entry from user

  //* Init metrics context
  //? Placeholder for date cross-check
  const todaysEntry = false;

  // Send new metric to back end

  // Redirect to progress upon successful entry completion

  return (
    <>
      <Layout>
        <Welcome />
        {todaysEntry ? <Complete /> : <EntryForm />}
        <Link to='/progress'>See your progress</Link>
      </Layout>
    </>
  );
}
