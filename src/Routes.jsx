import MainPage from './views/main/Main';
import NotFound from './views/not-found/NotFound';
import { Routes, Route } from 'react-router-dom';
import Login from './views/login/Login';
import Reg from './views/reg/Reg';
import MyTracks from './views/My-Tracks/MyTracks';
import Category from './views/Category/Category';
import { ProtectedRoute } from './ProtectedRoute';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Reg />} />
      <Route
        path="/favorites"
        element={
          <ProtectedRoute>
            <MyTracks />
          </ProtectedRoute>
        }
      />
      <Route path="/category/:id" element={<Category />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
