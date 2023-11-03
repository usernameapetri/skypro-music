import { Icon } from '../../Icons/Icon';
import SkeletonBar from '../Skeleton/SkeletonBar';
import * as S from './AudioPlayer.Styles';
export default function AudioPlayer(props) {
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <S.BarPlayer className="player">
            <S.PlayerControls>
              <S.PlayerBtnPrev>
                <S.PlayerBtnPrevSvg name="prev" alt="prev" />
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay className="_btn">
                <S.PlayerBtnPlaySvg name="play" alt="play" />
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext>
                <S.PlayerBtnNextSvg name="next" alt="next" />
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat className="_btn-icon">
                <S.PlayerBtnRepeatSvg name="repeat" alt="repeat" />
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle className="_btn-icon">
                <S.PlayerBtnShuffleSvg name="shuffle" alt="shuffle" />
              </S.PlayerBtnShuffle>
            </S.PlayerControls>

            <S.PlayerTrackPlay>
              {props.loadingPage ? (
                <SkeletonBar />
              ) : (
                <S.TrackPlayContain>
                  <S.TrackPlayImage>
                    <Icon name="note" className="track-play__svg" alt="music" />
                  </S.TrackPlayImage>
                  <S.TrackPlayAuthor>
                    <S.TrackPlayAuthorLink>
                      {props.selectedTrack.author}
                    </S.TrackPlayAuthorLink>
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum>
                    <S.TrackPlayAlbumLink>
                      {props.selectedTrack.album}
                    </S.TrackPlayAlbumLink>
                  </S.TrackPlayAlbum>
                </S.TrackPlayContain>
              )}

              <S.TrackPlayLikeDis>
                <S.TrackPlayLike className="_btn-icon">
                  <S.TrackPlayLikeSvg name="like" alt="like" />
                </S.TrackPlayLike>
                <S.TrackPlayDislike className="_btn-icon">
                  <S.TrackPlayDislikeSvg name="dislike" alt="dislike" />
                </S.TrackPlayDislike>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.BarVolumeBlock className="volume">
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSvg name="volume" alt="volume" />
              </S.VolumeImage>
              <S.VolumeProgress>
                <S.VolumeProgressLine
                  name="range"
                  className="_btn"
                  type="range"
                />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
}
