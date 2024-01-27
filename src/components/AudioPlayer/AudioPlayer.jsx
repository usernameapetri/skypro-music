import { useEffect, useRef, useState } from 'react';
import { Icon } from '../../Icons/Icon';
// import SkeletonBar from '../Skeleton/SkeletonBar';
import VolumeProgressLine from './VolumeProgressLine/VolumeProgressLine';
import * as S from './AudioPlayer.Styles';
import BarPlayerProgress from './BarPlayerProgress/BarPlayerProgress';
import { useDispatch, useSelector } from 'react-redux';
import {
  setShuffled,
  prevTrack,
  nextTrack,
  play,
  pause,
  selectCurrentTrack,
  // selectIsLoading,
  selectPlaing,
} from '../../redux/slicers/dataSlicers';

export default function AudioPlayer() {
  const dispatch = useDispatch();

  const currentTrack = useSelector(selectCurrentTrack);
  const plaing = useSelector(selectPlaing);
  // const isLoadingPage = useSelector(selectIsLoading);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isTrackRepeat, setIsTrackRepeat] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isShuffled, setIsShuffled] = useState(false);
  const [error, setError] = useState('');
  function formatDuration(durationInSeconds) {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  const audioRef = useRef(null);

  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    const handleVolumeUpdate = () => {
      setVolume(audio.cursor.volume);
    };

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };
    audio.addEventListener('volumeupdate', handleVolumeUpdate);
    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('volumeupdate', handleVolumeUpdate);
      audio.removeEventListener('loadedmetadata', setAudioData);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value / 100;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleProgressChange = (event) => {
    const audio = audioRef.current;
    const newTime = event.target.value;
    setCurrentTime(newTime);
    audio.currentTime = newTime;
  };

  function handleStart() {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          dispatch(play());
        })
        .catch((err) => {
          setError(err);
        });
    }
  }
  useEffect(() => {
    handleStart();

    if (currentTrack.track_file) {
      setDisplay(true);
    }
  }, [currentTrack]);

  const handleStop = () => {
    audioRef.current.pause();
    dispatch(pause());
  };

  const handleTrackRepeat = () => {
    const audio = audioRef.current;
    audio.loop = true;
    setIsTrackRepeat(true);
  };

  const handleTrackNoRepeat = () => {
    const audio = audioRef.current;
    audio.loop = false;
    setIsTrackRepeat(false);
  };

  const trackIsRepeat = isTrackRepeat ? handleTrackNoRepeat : handleTrackRepeat;
  const togglePlay = plaing ? handleStop : handleStart;
  const toggleShuffledIcon = () => {
    setIsShuffled(!isShuffled);
  };
  return (
    <div style={{ display: display ? '' : 'none' }}>
      <S.Audio
        controls
        autoPlay
        ref={audioRef}
        src={currentTrack.track_file}
        type="audio/mpeg"
      ></S.Audio>
      <S.Bar>
        <S.BarContent>
          <BarPlayerProgress
            duration={duration}
            handleProgressChange={handleProgressChange}
            currentTime={currentTime}
          />
          <S.BarPlayerBlock>
            <S.BarPlayer className="player">
              <S.PlayerControls>
                <S.PlayerBtnPrev onClick={() => dispatch(prevTrack())}>
                  <S.PlayerBtnPrevSvg name="prev" alt="prev" />
                </S.PlayerBtnPrev>
                <S.PlayerBtnPlay onClick={() => togglePlay()} className="_btn">
                  {plaing ? (
                    <S.PlayerBtnStopSvg name="stop" />
                  ) : (
                    <S.PlayerBtnPlaySvg name="play" />
                  )}
                </S.PlayerBtnPlay>
                <S.PlayerBtnNext onClick={() => dispatch(nextTrack())}>
                  <S.PlayerBtnNextSvg name="next" alt="next" />
                </S.PlayerBtnNext>
                <S.PlayerBtnRepeat
                  onClick={trackIsRepeat}
                  className="_btn-icon"
                >
                  <S.PlayerBtnRepeatSvg
                    isTrackRepeat={isTrackRepeat}
                    name="repeat"
                    alt="repeat"
                  />
                </S.PlayerBtnRepeat>
                <S.PlayerBtnShuffle
                  onClick={() => {
                    toggleShuffledIcon(), dispatch(setShuffled(!isShuffled));
                  }}
                >
                  <S.PlayerBtnShuffleSvg
                    isShuffled={isShuffled}
                    name="shuffle"
                    alt="shuffle"
                  />
                </S.PlayerBtnShuffle>
              </S.PlayerControls>

              <S.PlayerTrackPlay>
                {/* {isLoadingPage ? (
                  <SkeletonBar />
                ) : ( */}
                <S.TrackPlayContain>
                  <S.TrackPlayImage>
                    <Icon name="note" className="track-play__svg" alt="music" />
                  </S.TrackPlayImage>
                  <S.TrackPlayAuthor>
                    <S.TrackPlayAuthorLink>
                      {currentTrack.author}
                    </S.TrackPlayAuthorLink>
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum>
                    <S.TrackPlayAlbumLink>
                      {currentTrack.album}
                    </S.TrackPlayAlbumLink>
                  </S.TrackPlayAlbum>
                </S.TrackPlayContain>
                {/* )} */}

                {/* <S.TrackPlayLikeDis>
                  <S.TrackPlayLike
                    onClick={() => alert('В работе ')}
                    className="_btn-icon"
                  >
                    <S.TrackPlayLikeSvg name="like" alt="like" />
                  </S.TrackPlayLike>
                  <S.TrackPlayDislike onClick={() => alert('В работе ')}>
                    <S.TrackPlayDislikeSvg name="dislike" alt="dislike" />
                  </S.TrackPlayDislike>
                </S.TrackPlayLikeDis> */}
              </S.PlayerTrackPlay>
            </S.BarPlayer>
            <VolumeProgressLine
              volume={volume}
              handleVolumeChange={handleVolumeChange}
            />
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>

      <S.DurationTrackBlock>
        <S.CurrentTrackTime>{formatDuration(currentTime)}</S.CurrentTrackTime>
        <div>/</div>
        <S.DurationTrackTime>{formatDuration(duration)}</S.DurationTrackTime>
      </S.DurationTrackBlock>
    </div>
  );
}
