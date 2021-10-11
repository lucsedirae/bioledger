//* Dependencies
import { Link } from 'react-router-dom';

//* Custom components
import Complete from '../metrics/Complete';
import EntryForm from '../metrics/EntryForm';
import Layout from '../layout/Layout';
import Welcome from '../layout/Welcome';

export default function Entry() {
  //* Check context state to see if today's date has an entry from user
  const todaysEntry = false;

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
