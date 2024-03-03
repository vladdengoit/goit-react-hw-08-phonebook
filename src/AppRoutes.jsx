import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { LoginPage } from './pages/LoginPage';
import SharedLayout from './components/SharedLayout/SharedLayout';
import PrivateRoute from './components/PrivatePages/Privatepages';
import PublicPages from './components/PublicPages/Publicpages';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const PhoheBook = lazy(() => import('./pages/PhoneBook/PhoneBook'));
const Contact = lazy(() => import('./pages/Contact/ContactMy'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route element={<PrivateRoute />}>
          <Route path="my-form" element={<PhoheBook />} />
          <Route path="my-contacts" element={<Contact />} />
        </Route>
        <Route element={<PublicPages />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
