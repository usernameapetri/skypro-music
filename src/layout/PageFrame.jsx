import * as S from './PageFrame.Styles';
import NavMenu from '../components/NavMenu/NavMenu';
import SearchBar from '../components/TrackList/SearchBar';
import Sidebar from '../components/Sidebar/Sidebar';
import CenterBlock from '../components/TrackList/CenterBlock';
import { useContext, useEffect } from 'react';
import { TrackContext } from '../Context/track';
export default function PageFrame({ children }) {
  const { isLoadingPage, setisLoadingPage } = useContext(TrackContext);

  useEffect(() => {
    setTimeout(() => {
      setisLoadingPage(false);
    }, 2000);
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <CenterBlock>
            <SearchBar />
            {children}
          </CenterBlock>
          <Sidebar loadingPage={isLoadingPage} />
        </S.Main>
        <S.Footer />
      </S.Container>
    </S.Wrapper>
  );
}
