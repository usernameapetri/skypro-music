import { Icon } from '../../Icons/Icon';
import * as S from './TrackList.Styles';
export default function SearchBar() {
  return (
    <S.CenterBlockSearch className="search">
      <Icon className="search__svg" name="search" />
      <S.SearchText type="search" placeholder="Поиск" name="search" />
    </S.CenterBlockSearch>
  );
}
