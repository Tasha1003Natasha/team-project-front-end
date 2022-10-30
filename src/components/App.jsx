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

import { PublicRoute } from './PublicRoute/PublicRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

const AuthPageLazy = lazy(() => import('Pages/AuthPage/AuthPage'));
const MainPageLazy = lazy(() => import('Pages/MainPage/MainPage'));
const PageNotFoundLazy = lazy(() => import('Pages/PageNotFound/PageNotFound'));
const ContactsLazy = lazy(() => import('Pages/Contacts/Contacts'));
const UsefulInfoLazy = lazy(() => import('Pages/UsefulInfo/UsefulInfo'));
const ResultsPageLazy = lazy(() => import('Pages/ResultsPage/Results'));
const TestPageLazy = lazy(() => import('Pages/TestPage/TestPage'));

export const App = () => {
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
                <PrivateRoute>
                  <MainPageLazy />
                </PrivateRoute>
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

            <Route
              path="/contacts"
              element={
                <PublicRoute>
                  <ContactsLazy />
                </PublicRoute>
              }
            />

            <Route
              path="*"
              element={
                <PublicRoute>
                  <PageNotFoundLazy />
                </PublicRoute>
              }
            />
          </Route>
        </Routes>

        {/* <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="auth" element={<AuthPage />} />
            <Route path="test" element={<TestPage />} />
            <Route path="results" element={<ResultsPage />} />
            <Route path="useful-info" element={<UsefulInfo />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes> */}
      </Suspense>
    </>
  );
};
