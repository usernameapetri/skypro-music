import TrackList from '../../components/TrackList/Tracklist';
import Sidebar from '../../components/Sidebar/Sidebar';
import NavMenu from '../../components/NavMenu/NavMenu';
import * as S from './Main.Styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
function MainPage() {
  const [data, setData] = useState([]);
  const getTrackData = () => {
    axios
      .get('https://skypro-music-api.skyeng.tech/catalog/track/all/')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getTrackData();
  }, []);
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <TrackList trackData={data} />
          <Sidebar />
        </S.Main>

        <S.Footer />
      </S.Container>
    </S.Wrapper>
  );
}

export default MainPage;
