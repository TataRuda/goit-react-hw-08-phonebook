import { lazy, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from 'components/Layout/Layout';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';

const HomePage  = lazy(() => import('pages/Home/Home'));
const LoginPage  = lazy(() => import('pages/Login/Login'));
const RegistrationPage  = lazy(() => import('pages/Registration/Registration'));
const ContactsPage  = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
   const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]) 
 
return isRefreshing ? (
  <b>Refreshing user...</b>
  ) :  ( <>
    <Routes>
      <Route path="/" element={<Layout />}/>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component = {<LoginPage/>} />  } />
      <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component = {<RegistrationPage/>} /> } />
      <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component = {<ContactsPage/>} /> } />
    </Routes>
    </>
   )
};
