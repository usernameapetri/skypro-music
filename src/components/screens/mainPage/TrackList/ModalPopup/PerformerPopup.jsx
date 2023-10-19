import * as S from './Popup.Styles';

export const PopupElements = (props) => {
  if (props.name === 'year') {
    return (
      <S.PopupWrapper>
        <S.Popup>
          <S.PopupElement>По умолчанию</S.PopupElement>
          <S.PopupElement>Сначала новые</S.PopupElement>
          <S.PopupElement>Сначала старые</S.PopupElement>
        </S.Popup>
      </S.PopupWrapper>
    );
  } else if (props.name === 'performer') {
    return (
      <S.PopupWrapper left="8%">
        <S.Popup>
          <S.PopupElement className="popup__element">
            Michael Jackson
          </S.PopupElement>
          <S.PopupElement>Frank Sinatra</S.PopupElement>
          <S.PopupElement>Calvin Harris</S.PopupElement>
          <S.PopupElement>Zhu</S.PopupElement>
          <S.PopupElement>Arctic Monkeys</S.PopupElement>
        </S.Popup>
      </S.PopupWrapper>
    );
  } else if (props.name === 'genre') {
    return (
      <S.PopupWrapper left="36%">
        <S.Popup>
          <S.PopupElement>Рок</S.PopupElement>
          <S.PopupElement>Хип-хоп</S.PopupElement>
          <S.PopupElement>Поп-музыка</S.PopupElement>
          <S.PopupElement>Техно</S.PopupElement>
          <S.PopupElement>Инди</S.PopupElement>
        </S.Popup>
      </S.PopupWrapper>
    );
  }
};

export default PopupElements;
