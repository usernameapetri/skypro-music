import { Icon } from '../../Icons/Icon';
import * as S from './TrackList.Styles';

export default function SearchBar() {
  return (
    <S.CenterBlockSearch className="search">
      <Icon className="search__svg" name="search" />
      <S.SearchText
        type="search"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Поиск"
        name="search"
      />
    </S.CenterBlockSearch>
  );
}
