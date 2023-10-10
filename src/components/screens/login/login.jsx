import logoModalIcon from '../../../assets/logo_modal.png';
import styles from './login.module.css';

function Login() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerEnter}>
        <div className={styles.modal__block}>
          <form className={styles.modal__formLogin} action="#">
            <a href="../">
              <div className={styles.modal__logo}>
                <img src={logoModalIcon} alt="logo" />
              </div>
            </a>
            <input
              className={styles.modal__input}
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              className={styles.modal__input}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <button className={styles.modal__btnEnter}>Войти</button>
            <button className={styles.modal__btnSignup}>
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
