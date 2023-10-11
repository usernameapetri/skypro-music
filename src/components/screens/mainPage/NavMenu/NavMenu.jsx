import { useState } from 'react';
import logoImg from '../../../../assets/logo.png';
import './NavMenu.css';

export default function Nav() {
  const [menu_class, setMenuClass] = useState('nav__menu menu hidden');
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setMenuClass('nav__menu menu');
    } else {
      setMenuClass('nav__menu menu hidden');
    }
    setIsMenuClicked(!isMenuClicked);
  };
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src={logoImg} alt="logo" />
      </div>
      <div className="nav__burger burger" onClick={updateMenu}>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      <div className={menu_class}>
        <ul className="menu__list">
          <li className="menu__item">
            <a href="#" className="menu__link">
              Главное
            </a>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__link">
              Мой плейлист
            </a>
          </li>
          <li className="menu__item">
            <a href="../signin.html" className="menu__link">
              Войти
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
