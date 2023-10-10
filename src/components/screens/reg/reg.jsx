import logoModalIcon from '../../../assets/logo_modal.png';
import styles from './reg.module.css';

function Reg() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerSignup}>
        <div className={styles.modal__block}>
          <form className={styles.modal__formLogin}>
            <div className={styles.modal__logo}>
              <img src={logoModalIcon} alt="logo" />
            </div>
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
            <input
              className={styles.modal__input}
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <button className={styles.modal__btnSignupEnt}>
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reg;
