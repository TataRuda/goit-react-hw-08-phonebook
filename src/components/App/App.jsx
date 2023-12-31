import { lazy, useEffect, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from 'components/Layout/Layout';
import { RestrictedRoute } from 'hocs/RestrictedRoute';
import { PrivateRoute } from 'hocs/PrivateRoute';
import { Loader } from 'components/Loader/Loader';
import { Container, Progress } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('pages/HomePage/HomePage'))
const LoginPage  = lazy(() => import('pages/LoginPage/LoginPage'));
const RegistrationPage  = lazy(() => import('pages/RegistrationPage/RegistrationPage'));
const ContactsPage  = lazy(() => import('pages/ContactsPage/ContactsPage'));

export const App = () => {
   const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]) 
 
return isRefreshing ? (
  <Progress colorScheme='green' hasStripe value={64} />
  ) : ( <Container w="768px" m={[0,'auto']}>
    <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="login" element={<RestrictedRoute redirectTo="/contacts" component = {<LoginPage/>} />  } />
      <Route path="register" element={<RestrictedRoute redirectTo="/contacts" component = {<RegistrationPage/>} /> } />
      <Route path="contacts" element={<PrivateRoute redirectTo="/login" component = {<ContactsPage/>} /> } />
      </Route>
    </Routes>
    </Suspense>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> 
    </Container> 
   )
};
