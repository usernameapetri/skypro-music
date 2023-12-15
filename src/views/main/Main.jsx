import TrackList from '../../components/TrackList/Tracklist';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useEffect } from 'react';
import NavMenu from '../../components/NavMenu/NavMenu';
import * as S from './Main.Styles';
import { getTrackData } from '../../api/api';
import { useDispatch } from 'react-redux';
import {
  setTracksData,
  setIsLoadingPage,
  setFetchError,
} from '../../redux/slicers/dataSlicers';

function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoadingPage(true));
    getTrackData()
      .then((response) => {
        dispatch(setTracksData(response.data));
      })
      .catch((error) => {
        dispatch(setFetchError(error.message));
      })
      .finally(() => {
        dispatch(setIsLoadingPage(false));
      });
  }, [dispatch]);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <TrackList />
          <Sidebar />
        </S.Main>
        <S.Footer />
      </S.Container>
    </S.Wrapper>
  );
}

export default MainPage;
