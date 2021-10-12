//* Custom components
import Layout from '../layout/Layout';
import Welcome from '../layout/Welcome';
export default function Progress() {
  //* Import global auth and metric context

  // If user is not authenticated, redirect to login
  
  // If user is authenticated, display user metric data to charts 
  
  return (
    <>
      <Layout>
        <Welcome />
      </Layout>
    </>
  );
}
