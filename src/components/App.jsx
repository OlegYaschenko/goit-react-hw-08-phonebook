import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Contacts from 'views/ContactsView';
import LoginView from 'views/LoginView';
import RegisterView from 'views/RegisterView';
import Navigation from 'components/Navigation/Navigation';
import { getToken } from 'redux/authSlice';
import PrivateRoute from './Routes/PrivatRoute';
import PublicRoute from './Routes/PublicRoute';
import { useGetCurrentUserQuery } from 'redux/authApi';

function App() {
  const token = useSelector(getToken);
  useGetCurrentUserQuery(null, { skip: !token });
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegisterView />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>{!token && <LoginView />}</PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
