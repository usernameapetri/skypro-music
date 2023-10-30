import { Navigate } from 'react-router-dom';
export const ProtectedRoute = ({ children }) => {
  const Token = localStorage.getItem('Token');

  if (Token) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
