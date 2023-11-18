import logoModalIcon from '../../assets/logo_modal.png';
import * as S from './LoginStyles';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/user';
import { getAccesToken, loginUser } from '../../api/api';

function Login() {
  const data = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { email, password, setError, setUserData, setToken } = data;

    if (!email) {
      setError('Введите почту');
      setIsLoading(false);
      return;
    } else if (!password) {
      setError('Введите пароль');
      setIsLoading(false);
      return;
    }

    loginUser({ email, password })
      .then((response) => {
        setUserData(response.data);
        localStorage.setItem('user', JSON.stringify(response.data));

        getAccesToken({ email, password })
          .then((response) => {
            setToken(response.data);
            localStorage.setItem('token', JSON.stringify(response.data));
            navigate('/');
          })
          .catch((error) => {
            setError(
              error.response?.data?.detail || 'Произошла ошибка при входе',
            );
          })
          .finally(() => setIsLoading(false));
      })
      .catch((error) => {
        setError(error.response?.data?.detail || 'Произошла ошибка при входе');
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    data.setError(null);
    setIsLoading(false);
  }, [data.email, data.password]);

  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin onSubmit={handleLogin}>
            <S.ModalFormLink>
              <Link to="/login">
                <S.ModalLogo>
                  <img src={logoModalIcon} alt="logo" />
                </S.ModalLogo>
              </Link>
            </S.ModalFormLink>
            <S.ModalInput
              autoComplete="username"
              type="text"
              name="login"
              placeholder="Почта"
              value={data.email}
              onChange={(event) => {
                data.setEmail(event.target.value);
              }}
            />
            <S.ModalInput
              autoComplete="current-password"
              type="password"
              name="password"
              placeholder="Пароль"
              value={data.password}
              onChange={(event) => {
                data.setPassword(event.target.value);
              }}
            />
            {data.error && <S.Error>{data.error}</S.Error>}
            <S.ModalBtnEnter disabled={isLoading}>Войти</S.ModalBtnEnter>
            <Link to="/register">
              <S.ModalBtnSingup>Зарегистрироваться</S.ModalBtnSingup>
            </Link>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  );
}

export default Login;
