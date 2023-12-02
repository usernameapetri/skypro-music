import TrackList from '../../components/TrackList/Tracklist';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useContext, useEffect } from 'react';
import NavMenu from '../../components/NavMenu/NavMenu';
import * as S from './Main.Styles';
import { getTrackData } from '../../api/api';
import { TrackContext } from '../../Context/track';

function MainPage() {
  const data = useContext(TrackContext);




  
  useEffect(() => {
    data.setisLoadingPage(true);
    getTrackData()
      .then((response) => {
        data.setTrackList(response.data);
        data.setFetchError(null);
      })
      .catch((error) => {
        data.setFetchError(error.message);
      })
      .finally(() => {
        data.setisLoadingPage(false);
      });
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <TrackList
            selectedTrack={data.selectedTrack}
            setSelectedTrack={data.setSelectedTrack}
            fetchError={data.isFetchError}
            trackData={data.trackList}
            loadingPage={data.isLoadingPage}
          />
          <Sidebar loadingPage={data.isLoadingPage} />
        </S.Main>
        <S.Footer />
      </S.Container>
    </S.Wrapper>
  );
}

export default MainPage;
