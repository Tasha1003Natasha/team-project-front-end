import { Routes, Route } from 'react-router';
import Layout from './Layout/Layout';
// import AuthPage from '../Pages/AuthPage/AuthPage';
// import MainPage from '../Pages/MainPage/MainPage';
// import PageNotFound from '../Pages/PageNotFound/PageNotFound';
// import Contacts from '../Pages/Contacts/Contacts';
// import UsefulInfo from '../Pages/UsefulInfo/UsefulInfo';
// import ResultsPage from '../Pages/ResultsPage/Results';
// import TestPage from '../Pages/TestPage/TestPage';

import { lazy, Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { PublicRoute } from './PublicRoute/PublicRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

// import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userCurrent } from '../redux/auth/auth-operations';
// import { getToken } from '../redux/auth/auth-selector';

const AuthPageLazy = lazy(() => import('Pages/AuthPage/AuthPage'));
const MainPageLazy = lazy(() => import('Pages/MainPage/MainPage'));
const PageNotFoundLazy = lazy(() => import('Pages/PageNotFound/PageNotFound'));
const ContactsLazy = lazy(() => import('Pages/Contacts/Contacts'));
const UsefulInfoLazy = lazy(() => import('Pages/UsefulInfo/UsefulInfo'));
const ResultsPageLazy = lazy(() => import('Pages/ResultsPage/Results'));
const TestPageLazy = lazy(() => import('Pages/TestPage/TestPage'));

export const App = () => {
  const dispatch = useDispatch();
  // const token = useSelector(getToken);

  useEffect(() => {
    dispatch(userCurrent());
  }, [dispatch]);

  return (
    <>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                // <PrivateRoute>
                <MainPageLazy />
                // </PrivateRoute>
              }
            />

            <Route
              path="/auth"
              element={
                <PublicRoute>
                  <AuthPageLazy />
                </PublicRoute>
              }
            />
            <Route
              path="/test"
              element={
                <PrivateRoute>
                  <TestPageLazy />
                </PrivateRoute>
              }
            />
            <Route
              path="/results"
              element={
                <PrivateRoute>
                  <ResultsPageLazy />
                </PrivateRoute>
              }
            />
            <Route
              path="/useful-info"
              element={
                <PrivateRoute>
                  <UsefulInfoLazy />
                </PrivateRoute>
              }
            />
            <Route path="/contacts" element={<ContactsLazy />} />
            <Route path="*" element={<PageNotFoundLazy />} />

            {/* <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPageLazy />} />
            <Route path="/auth" element={<AuthPageLazy />} />
            <Route path="/test" element={<TestPageLazy />} />
            <Route path="/results" element={<ResultsPageLazy />} />
            <Route path="/useful-info" element={<UsefulInfoLazy />} />
            <Route path="/contacts" element={<ContactsLazy />} />
            <Route path="*" element={<PageNotFoundLazy />} />
          </Route>
        </Routes> */}
          </Route>
        </Routes>
        <ToastContainer theme="colored" />
      </Suspense>
    </>
  );
};
