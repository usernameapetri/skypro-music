import * as S from './PageFrame.Styles';
import AudioPlayer from '../components/AudioPlayer/AudioPlayer';
import NavMenu from '../components/NavMenu/NavMenu';
import SearchBar from '../components/TrackList/SearchBar';
import SidebarBlock from '../components/Sidebar/SidebarBlock';
import CenterBlock from '../components/TrackList/CenterBlock';
export default function PageFrame({ children }) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu></NavMenu>
          <CenterBlock>
            <SearchBar />
            {children}
          </CenterBlock>
          <SidebarBlock>
            <S.SidebarLayout />
          </SidebarBlock>
        </S.Main>
        <AudioPlayer></AudioPlayer>
        <S.Footer />
      </S.Container>
    </S.Wrapper>
  );
}
