import MainPage from './views/main/Main';
import NotFound from './views/not-found/NotFound';
import { Routes, Route } from 'react-router-dom';
import Login from './views/login/Login';
import Reg from './views/reg/Reg';
import Category from './views/Playlist-of-the-day/Category';
import { ProtectedRoute } from './ProtectedRoute';
import { Main } from './layout/PageFrame.Styles';

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Reg />} />
      <Route
        path="/favorites"
        element={
          <ProtectedRoute>
            <Main />
          </ProtectedRoute>
        }
      />
      <Route
        path="/category/:id"
        element={
          <ProtectedRoute>
            <Category />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
