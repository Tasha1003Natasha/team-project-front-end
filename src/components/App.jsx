import { Routes, Route } from 'react-router';
import Layout from './Layout/Layout';
import AuthPage from '../Page/AuthPage/AuthPage';
import MainPage from '../Page/MainPage/MainPage';
import PageNotFound from '../Page/PageNotFound/PageNotFound';
import Contacts from '../Page/Contacts';
import UsefulInfo from '../Page/UsefulInfo';
import Results from '../Page/Results';
import TestPage from '../Page/TestPage';

// import { lazy, Suspense } from 'react';
// import { Loader } from 'components/Loader/Loader';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="useful-info" element={<UsefulInfo />} />
          <Route path="contacts" element={<Contacts />}>
            <Route path="results" element={<Results />} />
            <Route path="test" element={<TestPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
};
