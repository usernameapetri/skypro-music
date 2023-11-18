import logoModalIcon from '../../assets/logo_modal.png';
import * as S from './Reg.Styles';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../Context/user';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser, getAccesToken } from '../../api/api';
export default function Reg() {
  const data = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { email, password, setError, setUserData, setToken, repeatPassword } =
    data;

  const handleRegistration = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email) {
      setError('Введите почту');
      setIsLoading(false);
      return;
    } else if (!password) {
      setError('Введите пароль');
      setIsLoading(false);
      return;
    } else if (!repeatPassword) {
      setError('Введите повторно пароль');
    }

    if (password !== repeatPassword) {
      setError('Пароли не совпадают');
      return;
    }
    registerUser({
      email,
      password,
    })
      .then((response) => {
        setUserData(response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
        getAccesToken({ email, password })
          .then((response) => {
            setToken(response.data);
            localStorage.setItem('token', JSON.stringify(response.data));
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
            const errorData = error.response?.data;
            if (errorData) {
              if (errorData.email) {
                setError(errorData.email[0]);
              } else if (errorData.password) {
                setError(errorData.password[0]);
              } else if (errorData.username) {
                setError(errorData.username[0]);
              } else {
                setError('Произошла ошибка при регистрации.');
              }
            }
          })
          .finally(() => setIsLoading(false));
      })
      .catch((error) => {
        const errorData = error.response?.data;
        if (errorData) {
          if (errorData.email) {
            setError(errorData.email[0]);
          } else if (errorData.password) {
            setError(errorData.password[0]);
          } else if (errorData.username) {
            setError(errorData.username[0]);
          } else {
            setError('Произошла ошибка при регистрации.');
          }
        }
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    data.setError(null);
    setIsLoading(false);
  }, [data.email, data.password]);

  return (
    <S.Wrapper>
      <S.ContainerSingup>
        <S.ModlaBlock>
          <S.ModalFormLogin onSubmit={handleRegistration}>
            <Link to="/login">
              <S.ModalLogo>
                <img src={logoModalIcon} alt="logo" />
              </S.ModalLogo>
            </Link>

            <S.ModalInput
              autoComplete="username"
              type="email"
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
              value={password}
              onChange={(event) => {
                data.setPassword(event.target.value);
              }}
            />
            <S.ModalInput
              autoComplete="new-password"
              type="password"
              name="repeat-password"
              placeholder="Повторите пароль"
              value={repeatPassword}
              onChange={(event) => {
                data.setRepeatPassword(event.target.value);
              }}
            />
            {data.error && <S.Error>{data.error}</S.Error>}
            <S.ModalBtnSingupEnt disabled={isLoading}>
              Зарегистрироваться
            </S.ModalBtnSingupEnt>
          </S.ModalFormLogin>
        </S.ModlaBlock>
      </S.ContainerSingup>
    </S.Wrapper>
  );
}
