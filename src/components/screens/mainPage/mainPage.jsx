import NavMenu from './NavMenu/NavMenu.jsx';
import TrackList from './TrackList/Tracklist.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import AudioPlayer from './AudioPlayer/AudioPlayer.jsx';
import * as S from './MainPage.Styles.jsx';
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
