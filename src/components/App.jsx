import { Route, Routes, useNavigate } from 'react-router';
import Layout from './Layout/Layout';
import { Loader } from 'components/Loader/Loader';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { updateToken, userCurrent } from '../redux/auth/auth-operations';

const AuthPageLazy = lazy(() => import('Pages/AuthPage/AuthPage'));
const MainPageLazy = lazy(() => import('Pages/MainPage/MainPage'));
const PageNotFoundLazy = lazy(() => import('Pages/PageNotFound/PageNotFound'));
const ContactsLazy = lazy(() => import('Pages/Contacts/Contacts'));
const UsefulInfoLazy = lazy(() => import('Pages/UsefulInfo/UsefulInfo'));
const ResultsPageLazy = lazy(() => import('Pages/ResultsPage/Results'));
const TestPageLazy = lazy(() => import('Pages/TestPage/TestPage'));

export const App = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = searchParams.get('token');

    if (accessToken) {
      dispatch(updateToken(accessToken));
      navigate('/');
    }

    dispatch(userCurrent());
  }, [searchParams, dispatch, navigate]);

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
            <Route index element={<MainPageLazy />} />

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
              path="/check"
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
          </Route>
        </Routes>
        <ToastContainer theme="colored" />
      </Suspense>
    </>
  );
};
