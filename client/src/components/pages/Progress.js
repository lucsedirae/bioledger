//* Dependencies
import { useContext, useEffect } from 'react';

//* Custom components
import Layout from '../layout/Layout';
import Welcome from '../layout/Welcome';

//* Import auth context
import AuthContext from '../../context/authContext';
import MetricContext from '../../context/metricContext';

export default function Progress() {
  //* Init auth context
  const { loadUser } = useContext(AuthContext);
  const { getMetrics, metrics } = useContext(MetricContext);

  useEffect(() => {
    loadUser();
    getMetrics();
    console.log(metrics)
  }, [getMetrics, metrics, loadUser]);
  // Authenticate user

  // If user is authenticated, display user metric data to charts

  return (
    <>
      <Layout>
        <Welcome />
      </Layout>
    </>
  );
}
