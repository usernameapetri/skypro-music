import NavMenu from '../../components/NavMenu/NavMenu';
import TrackList from '../../components/TrackList/Tracklist';
import Sidebar from '../../components/Sidebar/Sidebar';
import AudioPlayer from '../../components/AudioPlayer//AudioPlayer';
import * as S from './Main.Styles';
function MainPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu></NavMenu>
          <TrackList></TrackList>
          <Sidebar></Sidebar>
        </S.Main>
        <AudioPlayer></AudioPlayer>
        <S.Footer />
      </S.Container>
    </S.Wrapper>
  );
}

export default MainPage;
