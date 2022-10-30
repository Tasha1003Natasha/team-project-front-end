import AuthForm from 'components/AuthForm/AuthForm';
// import { useSelector } from 'react-redux';
// import { getIsLoggedIn } from 'redux/auth/auth-selector';

const AuthPage = () => {
  // const isLogin = useSelector(getIsLoggedIn);

  // if (!isLogin) {
  return (
    <>
      <AuthForm />
    </>
  );
  // }
};

export default AuthPage;
