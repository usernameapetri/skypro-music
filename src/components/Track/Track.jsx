import { useEffect, useState } from 'react';
import { Icon } from '../../Icons/Icon';
import * as S from './Track.Styles';
import {
  selectCurrentTrack,
  selectPlaing,
} from '../../redux/slicers/dataSlicers';

import { useSelector } from 'react-redux';
export default function Track(props) {
  const [trackTime, setTrackTime] = useState(0);

  function formatDuration(durationInSeconds) {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds % 60;
    setTrackTime(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
  }
  const [isAnimated, setIsAnimated] = useState(false);
  const isPlayng = useSelector(selectPlaing);
  const selectedTrack = useSelector(selectCurrentTrack);
  useEffect(() => {
    formatDuration(props.duration);
  }, [props.duration]);

  const mat = () => {
    if (props.url === selectedTrack.track_file) {
      setIsAnimated(true);
    } else {
      setIsAnimated(false);
    }
  };

  useEffect(() => {
    mat();
  }, [selectedTrack]);

  return (
    <S.PlaylistItem onClick={props.onClick}>
      <S.PlayListTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            {isAnimated ? isPlayng ? <S.PulsatingCircle /> : <S.Circle /> : ''}
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
