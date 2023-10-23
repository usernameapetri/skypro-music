import { useEffect, useState } from 'react';
import { Icon } from '../../Icons/Icon';
import SkeletonTrack from '../Skeleton/SkeletonTrack';
import * as S from './Track.Styles';
export default function Track(props) {
  const [trackTime, setTrackTime] = useState(0);

  function formatDuration(durationInSeconds) {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds % 60;
    setTrackTime(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
  }

  const [tracks, setTrack] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTrack(true);
      formatDuration(props.duration);
    }, 3000);
  }, []);
  return (
    <S.PlaylistItem>
      {tracks && (
        <S.PlayListTrack className="track">
          <S.TrackTitle>
            <S.TrackTitleImage>
              <Icon className="track__title-svg" alt="music" name="note" />
            </S.TrackTitleImage>
            <S.TrackTitleText>
              <S.TrackTitleLink href="http://">
                {props.name} <S.TrackTitleSpan></S.TrackTitleSpan>
              </S.TrackTitleLink>
            </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://">{props.author}</S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://">{props.album}</S.TrackAlbumLink>
          </S.TrackAlbum>
          <S.TrackTime>
            <S.TrackTimeSvg
              className="track__time-svg"
              alt="time"
              name="like"
            />
            <S.TrackTimeText>{trackTime}</S.TrackTimeText>
          </S.TrackTime>
        </S.PlayListTrack>
      )}

      {!tracks && [1, 2, 3, 4, 5].map((n) => <SkeletonTrack key={n} />)}
    </S.PlaylistItem>
  );
}
