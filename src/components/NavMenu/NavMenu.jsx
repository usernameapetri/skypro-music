import { useState } from 'react';
import logoImg from '../../assets/logo.png';
import * as S from './NavMenu.Styles';

export default function Nav() {
  const [isMenuClicked, setIsMenuClicked] = useState(null);

  return (
    <S.MainNav className="nav">
      <S.NavLogo className="logo">
        <S.LogoImage src={logoImg} alt="logo" />
      </S.NavLogo>
      <S.NavBurger
        className="burger"
        onClick={() => setIsMenuClicked(!isMenuClicked)}
      >
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      {isMenuClicked && (
        <S.NavMenu className="menu">
          <S.MenuList>
            <S.MenuItem>
              <S.MenuLink to="/">Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink to="/favorites">Мой плейлист</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink to="/login">Войти</S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  );
}
