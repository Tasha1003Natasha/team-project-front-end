import Navigation from 'components/Navigation/Navigation';
import Footer from 'components/Footer/Footer';
import { Outlet } from 'react-router';

import Toggle from '../Theme/Toggle';

const Layout = () => {
  return (
    <>
      <Toggle />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
