//* Dependencies
import { Link } from 'react-router-dom';

//* Custom components
import Layout from '../layout/Layout';
import fitnessImg from '../../svg/fitness_SVG.svg';

export default function Home() {
  return (
    <Layout>
      <div style={{ paddingTop: '3rem' }}>
        <img src={fitnessImg} alt='Man exercising' className='splash-image' />
      </div>
      <div style={{ padding: '2rem' }}>
        <h3>
          Bioledger is an easy way to track key personal health biometric
          markers. Track weight loss, blood pressure, and more!
        </h3>
      </div>
      <div style={{ padding: '.5rem' }}>
        <Link to='/login'>Login</Link>
      </div>
      <div style={{ padding: '.5rem' }}>
        <Link to='/register'>Create an account</Link>
      </div>
    </Layout>
  );
}
