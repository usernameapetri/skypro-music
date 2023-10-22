import PageFrame from '../../layout/PageFrame';
import * as S from '../../components/TrackList/TrackList.Styles';
import Track from '../../components/Track/Track';
export default function MyTracklist() {
  return (
    <PageFrame>
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
      </S.CenterBlockContent>
      <S.ContentPlaylist>
        <Track />
      </S.ContentPlaylist>
    </PageFrame>
  );
}
