import { useEffect, useState } from 'react';
import { Icon } from '../../Icons/Icon';
import * as S from './Track.Styles';
import {
  selectCurrentTrack,
  selectPlaing,
} from '../../redux/slicers/dataSlicers';

import { useSelector } from 'react-redux';
import {
  useRemoveFavoriteMutation,
  useAddToFavoritesMutation,
  useGetAllFavoriteQuery,
} from '../../services/track';

export default function Track(props) {
  const [trackTime, setTrackTime] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);
  const isPlayng = useSelector(selectPlaing);
  const selectedTrack = useSelector(selectCurrentTrack);
  const [isFavorite, setIsFavorite] = useState(false);

  const { data } = useGetAllFavoriteQuery();
  const favoriteTrack = data;
  const [addToFavorites] = useAddToFavoritesMutation();
  const [removeToFavorites] = useRemoveFavoriteMutation();

  useEffect(() => {
    formatDuration(props.duration);
  }, [props.duration]);

  useEffect(() => {
    animationTrack();
  }, [selectedTrack]);

  useEffect(() => {
    setIsFavorite(isLiked(props.id, favoriteTrack));
  }, [props.id, favoriteTrack]);

  const formatDuration = (durationInSeconds) => {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds % 60;
    setTrackTime(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
  };

  const animationTrack = () => {
    setIsAnimated(props.url === selectedTrack.track_file);
  };

  const removeToFavoritesHandler = async (e) => {
    e.stopPropagation();
    if (removeToFavorites) {
      await removeToFavorites(props.id);
    }
  };

  const addToFavoritesHandler = async (e) => {
    e.stopPropagation();

    if (addToFavorites) {
      await addToFavorites(props.id);
    }
  };

  const isLiked = (id, arr) => {
    return arr && Array.isArray(arr) && arr.some((item) => item.id === id);
  };

  return (
    <S.PlaylistItem onClick={props.onClick}>
      <S.PlayListTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            {isAnimated ? isPlayng ? <S.PulsatingCircle /> : <S.Circle /> : ''}
            <Icon alt="music" name="note" />
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
          {isFavorite ? (
            <S.DefButton onClick={removeToFavoritesHandler}>
              <S.TrackRegularLike alt="like" name="like" />
            </S.DefButton>
          ) : (
            <S.DefButton onClick={addToFavoritesHandler}>
              <S.TrackTimeSvg alt="like" name="like" />
            </S.DefButton>
          )}
          <S.TrackTimeText>{trackTime}</S.TrackTimeText>
        </S.TrackTime>
      </S.PlayListTrack>
    </S.PlaylistItem>
  );
}
