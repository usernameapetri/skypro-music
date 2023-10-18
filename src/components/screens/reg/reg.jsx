import logoModalIcon from '../../../assets/logo_modal.png';
import * as S from './RegStyles';

function Reg() {
  return (
    <S.Wrapper>
      <S.ContainerSingup>
        <S.ModlaBlock>
          <S.ModalFormLogin>
            <S.ModalLogo>
              <img src={logoModalIcon} alt="logo" />
            </S.ModalLogo>
            <S.ModalInput type="text" name="login" placeholder="Почта" />
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <S.ModalBtnSingupEnt>Зарегистрироваться</S.ModalBtnSingupEnt>
          </S.ModalFormLogin>
        </S.ModlaBlock>
      </S.ContainerSingup>
    </S.Wrapper>
  );
}

export default Reg;
