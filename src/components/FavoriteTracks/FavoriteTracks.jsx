import { useDispatch } from 'react-redux';
import { setCurrentTrack } from '../../redux/slicers/dataSlicers';
import { useGetAllFavoriteQuery } from '../../services/track';
import SkeletonTrack from '../Skeleton/SkeletonTrack';
import Track from '../Track/Track';
import * as S from './FavoriteTracks.Styles';

export default function FavoriteTraks() {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetAllFavoriteQuery();

  const setTrack = (e) => {
    dispatch(setCurrentTrack(e));
  };

  return (
    <>
      <S.CenterBlockH2>Мои треки</S.CenterBlockH2>
      <S.CenterBlockContent>
        <S.ContentTitle className="playlist-title">
          <S.PlaylistTitleCol width="447px">Трек</S.PlaylistTitleCol>
          <S.PlaylistTitleCol width="321px">ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol>
          <S.PlaylistTitleCol width="245px">АЛЬБОМ</S.PlaylistTitleCol>
          <S.PlaylistTitleColExtra>
            <S.StyledIcon
              name="watch"
              className="playlist-title__svg"
              alt="time"
            />
          </S.PlaylistTitleColExtra>
        </S.ContentTitle>
        {isLoading ? (
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => <SkeletonTrack key={n} />)
        ) : data.length === 0 ? (
          <S.NotFoundTrack>В этом поейлисте нет треков</S.NotFoundTrack>
        ) : (
          data.map((el) => (
            <Track
              onClick={() => setTrack(el)}
              key={el.id}
              name={el.name}
              id={el.id}
              author={el.author}
              album={el.album}
              duration={el.duration_in_seconds}
              url={el.track_file}
            />
          ))
        )}
      </S.CenterBlockContent>
      <S.ContentPlaylist></S.ContentPlaylist>
    </>
  );
}
