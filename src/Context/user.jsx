import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthorizationContext = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUserData = localStorage.getItem('user');

    if (storedToken) {
      setToken(JSON.parse(storedToken));
    }

    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const updateToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  const updateUserData = (newUserData) => {
    setUserData(newUserData);
    localStorage.setItem('user', JSON.stringify(newUserData));
  };

  const value = {
    userData,
    setUserData: updateUserData,
    token,
    setToken: updateToken,
    email,
    setEmail,
    password,
    setPassword,
    repeatPassword,
    setRepeatPassword,
    error,
    setError,
    isLogin,
    setIsLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
