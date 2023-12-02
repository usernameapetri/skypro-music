import * as S from './PageFrame.Styles';
import NavMenu from '../components/NavMenu/NavMenu';
import SearchBar from '../components/TrackList/SearchBar';
import Sidebar from '../components/Sidebar/Sidebar';
import CenterBlock from '../components/TrackList/CenterBlock';

export default function PageFrame({ children }) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <CenterBlock>
            <SearchBar />
            {children}
          </CenterBlock>
          <Sidebar />
        </S.Main>
        <S.Footer />
      </S.Container>
    </S.Wrapper>
  );
}
