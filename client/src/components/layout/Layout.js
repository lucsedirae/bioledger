//* Custom components
import Header from './Header';
import AppPanel from './AppPanel';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      <AppPanel>{children}</AppPanel>
      <Footer />
    </div>
  );
}
