import PageFrame from '../../layout/PageFrame';
import * as S from '../../components/TrackList/TrackList.Styles';
import Track from '../../components/Track/Track';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectClassicalMusic,
  selectRockMusic,
  selectElectronicMusic,
  setCurrentTrack,
} from '../../redux/slicers/dataSlicers';
import { useGetAllFavoriteQuery } from '../../services/track';
import SkeletonTrack from '../../components/Skeleton/SkeletonTrack';

export default function PlayOfTheDay() {
  const { data, isLoading } = useGetAllFavoriteQuery();
  const { id } = useParams();
  const dispatch = useDispatch();

  const trackData =
    id === '1'
      ? useSelector(selectClassicalMusic)
      : id === '2'
      ? useSelector(selectElectronicMusic)
      : id === '3'
      ? useSelector(selectRockMusic)
      : [];

  const setTrack = (e) => {
    dispatch(setCurrentTrack(e));
  };
  return (
    <PageFrame>
      <S.CenterBlockH2>
        {id === '1'
          ? 'Классическая музыка'
          : id === '2'
          ? 'Электроннаямузыка'
          : id === '3'
          ? 'Рок музыка'
          : ''}
      </S.CenterBlockH2>

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
      </S.CenterBlockContent>
      <S.ContentPlaylist>
        {isLoading
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <SkeletonTrack key={n} />
            ))
          : trackData.map((el) => (
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
            ))}
      </S.ContentPlaylist>
    </PageFrame>
  );
}
