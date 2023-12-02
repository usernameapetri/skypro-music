import { useEffect, useRef, useState, useContext } from 'react';
import { Icon } from '../../Icons/Icon';
import SkeletonBar from '../Skeleton/SkeletonBar';
import VolumeProgressLine from './VolumeProgressLine/VolumeProgressLine';
import * as S from './AudioPlayer.Styles';
import BarPlayerProgress from './BarPlayerProgress/BarPlayerProgress';
import { TrackContext } from '../../Context/track';

export default function AudioPlayer() {
  const { isLoadingPage, selectedTrack } = useContext(TrackContext);
  if (!selectedTrack) {
    return null;
  }

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isTrackRepeat, setIsTrackRepeat] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);

  function formatDuration(durationInSeconds) {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play();
    setIsPlaying(true);
  }, [selectedTrack.track_file]);

  useEffect(() => {
    const audio = audioRef.current;

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    const setTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('timeupdate', setTimeUpdate);

    return () => {
      audio.removeEventListener('loadedmetadata', setAudioData);
      audio.removeEventListener('timeupdate', setTimeUpdate);
    };
  }, [audioRef]);
  useEffect(() => {
    const audio = audioRef.current;
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    if (audio) {
      audio.addEventListener('timeupdate', handleTimeUpdate);
    }

    return () => {
      if (audio) {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, [audioRef]);

  useEffect(() => {
    const audio = audioRef.current;

    const handleVolumeUpdate = () => {
      setVolume(audio.cursor.volume);

      if (audio) {
        audio.addEventListener('volumeupdate', handleVolumeUpdate);

        return () => {
          if (audio) {
            audio.removeEventListener('volumeupdate', handleVolumeUpdate);
          }
        };
      }
    };
  }, [audioRef]);

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

  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
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
  const togglePlay = isPlaying ? handleStop : handleStart;

  return (
    <>
      <S.Audio
        controls
        ref={audioRef}
        src={selectedTrack.track_file}
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
                <S.PlayerBtnPrev onClick={() => alert('В работе ')}>
                  <S.PlayerBtnPrevSvg name="prev" alt="prev" />
                </S.PlayerBtnPrev>
                <S.PlayerBtnPlay onClick={() => togglePlay()} className="_btn">
                  {isPlaying ? (
                    <S.PlayerBtnStopSvg name="stop" />
                  ) : (
                    <S.PlayerBtnPlaySvg name="play" />
                  )}
                </S.PlayerBtnPlay>
                <S.PlayerBtnNext onClick={() => alert('В работе ')}>
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
                <S.PlayerBtnShuffle onClick={() => alert('В работе ')}>
                  <S.PlayerBtnShuffleSvg name="shuffle" alt="shuffle" />
                </S.PlayerBtnShuffle>
              </S.PlayerControls>

              <S.PlayerTrackPlay>
                {isLoadingPage ? (
                  <SkeletonBar />
                ) : (
                  <S.TrackPlayContain>
                    <S.TrackPlayImage>
                      <Icon
                        name="note"
                        className="track-play__svg"
                        alt="music"
                      />
                    </S.TrackPlayImage>
                    <S.TrackPlayAuthor>
                      <S.TrackPlayAuthorLink>
                        {selectedTrack.author}
                      </S.TrackPlayAuthorLink>
                    </S.TrackPlayAuthor>
                    <S.TrackPlayAlbum>
                      <S.TrackPlayAlbumLink>
                        {selectedTrack.album}
                      </S.TrackPlayAlbumLink>
                    </S.TrackPlayAlbum>
                  </S.TrackPlayContain>
                )}

                <S.TrackPlayLikeDis>
                  <S.TrackPlayLike
                    onClick={() => alert('В работе ')}
                    className="_btn-icon"
                  >
                    <S.TrackPlayLikeSvg name="like" alt="like" />
                  </S.TrackPlayLike>
                  <S.TrackPlayDislike onClick={() => alert('В работе ')}>
                    <S.TrackPlayDislikeSvg name="dislike" alt="dislike" />
                  </S.TrackPlayDislike>
                </S.TrackPlayLikeDis>
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
    </>
  );
}
