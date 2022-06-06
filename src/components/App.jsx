import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Contacts from 'views/ContactsView';
import LoginView from 'views/LoginView';
import RegisterView from 'views/RegisterView';
import Navigation from 'components/Navigation/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
