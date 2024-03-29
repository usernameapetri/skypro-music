import PageFrame from '../../layout/PageFrame';
import Smile from '../../assets/smile_crying.png';
import * as S from './NotFound.Styles';
import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <PageFrame>
      <S.Wrapper>
        <S.ErrorHeading>404</S.ErrorHeading>
        <S.ErrorMessage>
          <S.ErrorText>Страница не найдена</S.ErrorText>
          <img src={Smile} alt="SmileCrynge" />
        </S.ErrorMessage>

        <S.ErrorBot>Возможно, она была удалена</S.ErrorBot>

        <S.ErrorBot>или перенесена на другой адрес</S.ErrorBot>
        <Link to="/">
          <S.ErrorBtn>Вернуться на главную</S.ErrorBtn>
        </Link>
      </S.Wrapper>
    </PageFrame>
  );
}
