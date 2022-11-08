import Navigation from 'components/Navigation/Navigation';
import Footer from 'components/Footer/Footer';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
