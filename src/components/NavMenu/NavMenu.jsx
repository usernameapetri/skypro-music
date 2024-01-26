import { useState } from 'react';
import logoImg from '../../assets/logo.png';
import * as S from './NavMenu.Styles';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [isMenuClicked, setIsMenuClicked] = useState(true);

  return (
    <S.MainNav>
      <Link to="/">
        <S.NavLogo>
          <S.LogoImage src={logoImg} alt="logo" />
        </S.NavLogo>
      </Link>
      <S.NavBurger
        className="burger"
        onClick={() => setIsMenuClicked(!isMenuClicked)}
      >
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      {isMenuClicked && (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <S.MenuLink to="/">Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink to="/favorites">Мой плейлист</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink
                to="/login"
                onClick={() => {
                  localStorage.removeItem('token');
                  localStorage.removeItem('user');
                }}
              >
                Войти
              </S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  );
}
