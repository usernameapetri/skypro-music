import PageFrame from '../../layout/PageFrame';
import * as S from '../../components/TrackList/TrackList.Styles';
import Track from '../../components/Track/Track';
import { useParams } from 'react-router-dom';
export default function PlayOfTheDay() {
  const { id } = useParams();
  console.log(id);
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
        <Track />
      </S.ContentPlaylist>
    </PageFrame>
  );
}
