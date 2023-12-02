import { useEffect, useState } from 'react';
import { Icon } from '../../Icons/Icon';
import * as S from './Track.Styles';
export default function Track(props) {
  const [trackTime, setTrackTime] = useState(0);

  function formatDuration(durationInSeconds) {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds % 60;
    setTrackTime(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
  }

  useEffect(() => {
    formatDuration(props.duration);
  }, [props.duration]);

  return (
    <S.PlaylistItem onClick={props.onClick}>
      <S.PlayListTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <Icon className="track__title-svg" alt="music" name="note" />
          </S.TrackTitleImage>
          <S.TrackTitleText>
            <S.TrackTitleLink>
              {props.name} <S.TrackTitleSpan></S.TrackTitleSpan>
            </S.TrackTitleLink>
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor>
          <S.TrackAuthorLink>{props.author}</S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <S.TrackAlbumLink>{props.album}</S.TrackAlbumLink>
        </S.TrackAlbum>
        <S.TrackTime>
          <S.TrackTimeSvg className="track__time-svg" alt="time" name="like" />
          <S.TrackTimeText>{trackTime}</S.TrackTimeText>
        </S.TrackTime>
      </S.PlayListTrack>
    </S.PlaylistItem>
  );
}
