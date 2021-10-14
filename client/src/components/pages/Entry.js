//* Dependencies
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

//* Custom components
import Complete from '../metrics/Complete';
import EntryForm from '../metrics/EntryForm';
import Layout from '../layout/Layout';
import Welcome from '../layout/Welcome';

//* Import auth context
import AuthContext from '../../context/authContext';
import MetricContext from '../../context/metricContext';

export default function Entry(props) {
  //* Inite auth context
  const authContext = useContext(AuthContext);
  const { logout, user, loadUser } = authContext;

  //* Init metrics context
  const metricContext = useContext(MetricContext);
  const { metrics, getMetrics } = metricContext;

  useEffect(() => {
    loadUser();
    getMetrics();
    // eslint-disable-next-line
  }, []);
  console.log(user);
  console.log(metrics);

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
        <div>
          <a href='#!' onClick={logout}>
            Logout
          </a>
        </div>
      </Layout>
    </>
  );
}
