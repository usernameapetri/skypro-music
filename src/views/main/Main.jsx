import TrackList from '../../components/TrackList/Tracklist';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useEffect } from 'react';
import NavMenu from '../../components/NavMenu/NavMenu';
import * as S from './Main.Styles';
import { useDispatch } from 'react-redux';
import { setTracksData } from '../../redux/slicers/dataSlicers';
import { useGetAllTracksQuery } from '../../services/track';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetAllTracksQuery();

  if (error?.status === 401) {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    navigate('/login');
  }

  useEffect(() => {
    if (data) {
      dispatch(setTracksData(data));
    }
  }, [data, dispatch]);
  console.log(data);
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <TrackList loadingPage={isLoading} />
          <Sidebar loadingPage={isLoading} />
        </S.Main>
        <S.Footer />
      </S.Container>
    </S.Wrapper>
  );
}

export default MainPage;
