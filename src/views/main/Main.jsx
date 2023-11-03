import TrackList from '../../components/TrackList/Tracklist';
import Sidebar from '../../components/Sidebar/Sidebar';
import NavMenu from '../../components/NavMenu/NavMenu';
import * as S from './Main.Styles';

function MainPage(props) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <TrackList
            selectedTrack={props.selectedTrack}
            setSelectedTracks={props.setSelectedTracks}
            fetchError={props.fetchError}
            trackData={props.trackData}
            loadingPage={props.loadingPage}
          />
          <Sidebar loadingPage={props.loadingPage} />
        </S.Main>
        <S.Footer />
      </S.Container>
    </S.Wrapper>
  );
}

export default MainPage;
