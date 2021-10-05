//* Custom components
import Header from './Header';
import Welcome from './Welcome';
import AppPanel from './AppPanel';
import Footer from './Footer';
import App from '../../App';

export default function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      <Welcome />
      <AppPanel>{children}</AppPanel>
      <Footer />
    </div>
  );
}
