import Navigation from 'components/Navigation/Navigation';
import Footer from 'components/Footer/Footer';
import { Outlet } from 'react-router';

// import { useSelector } from 'react-redux';
// import { getIsLoggedIn } from 'redux/auth/auth-selector';
// import AuthPage from 'Pages/AuthPage/AuthPage';

const Layout = () => {
  // const isLogin = useSelector(getIsLoggedIn);

  return (
    <>
      <Navigation />
      <Outlet />
<<<<<<< HEAD
      <Footer />
=======
      <Footer/>
>>>>>>> main
    </>
  );
};

export default Layout;

// if (isLogin) {
//   return (
//     <>
//       <Navigation />
//       <Outlet />
//     </>
//   );
// } else {
//   return (
//     <>
//       <Navigation />
//       <AuthPage />
//     </>
//   );
