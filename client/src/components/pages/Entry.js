//* Dependencies
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from 'lucsedirae';

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
    const loadEntry = () => {
      try {
        loadUser();
        getMetrics();
      } catch (err) {
        console.error(err);
      }
    };
    loadEntry();
  }, []);

  console.log(metrics);
  console.log(user);

  const today = formatDate(Date.now());
  const lastEntryDate = metrics ? formatDate(metrics[0].date) : 'Hi';

  // Send new metric to back end

  // Redirect to progress upon successful entry completion

  return (
    <>
      <Layout>
        <Welcome />
        {today === lastEntryDate ? <Complete /> : <EntryForm />}
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
