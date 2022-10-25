import { Routes, Route } from 'react-router';
import Layout from './Layout/Layout';
import AuthPage from '../Pages/AuthPage/AuthPage';
import MainPage from '../Pages/MainPage/MainPage';
import PageNotFound from '../Pages/PageNotFound/PageNotFound';
import Contacts from '../Pages/Contacts';
import UsefulInfo from '../Pages/UsefulInfo';
import Results from '../Pages/Results';
import TestPage from '../Pages/TestPage';

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
