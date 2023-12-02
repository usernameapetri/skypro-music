import styled from 'styled-components';
import { Icon } from '../../Icons/Icon';

export const Bar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`;

export const Audio = styled.audio`
  display: none;
`;

export const BarContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const BarPlayerProgress = styled.div`
  width: 100%;
  height: 5px;
  background: #2e2e2e;
`;

export const BarPlayerBlock = styled.div`
  height: 73px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

export const BarPlayer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

export const PlayerControls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
`;

export const PlayerBtn = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const PlayerBtnPrev = styled(PlayerBtn)`
  margin-right: 23px;
`;

export const PlayerBtnPrevSvg = styled(Icon)`
  cursor: pointer;
  path {
    fill: #d9d9d9;
  }

  &:hover path {
    fill: #696969;
  }

  &:active path {
    fill: #d9d9d9;
  }
`;

export const PlayerBtnPlay = styled(PlayerBtn)`
  margin-right: 23px;
`;

export const PlayerBtnPlaySvg = styled(Icon)`
  &:hover path {
    fill: #696969;
  }

  &:active path {
    fill: #d9d9d9;
  }
`;
export const PlayerBtnStopSvg = styled(Icon)`
  &:hover rect {
    fill: #696969;
  }
  &:active rect {
    fill: #d9d9d9;
  }
`;

export const PlayerBtnNext = styled(PlayerBtn)`
  margin-right: 28px;
  fill: #a53939;
`;

export const PlayerBtnNextSvg = styled(Icon)`
  cursor: pointer;
  path {
    fill: #d9d9d9;
  }

  &:hover path {
    fill: #696969;
  }

  &:active path {
    fill: #d9d9d9;
  }
`;

export const PlayerBtnRepeat = styled(PlayerBtn)`
  margin-right: 24px;
`;

export const PlayerBtnRepeatSvg = styled(Icon)`
  cursor: pointer;
  path {
    fill: ${(props) => (props.isTrackRepeat ? '#ffffff' : '#696969')};
  }
  &:hover path {
    fill: ${(props) => (props.isTrackRepeat ? '#ffffff' : '#acacac')};
  }

  &:active path {
    fill: #ffffff;
  }

  ${(props) =>
    props.isTrackRepeat &&
    `
    &:active path {
      fill: #ffffff;
    }
  `}
`;

export const PlayerBtnShuffle = styled(PlayerBtn)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const PlayerBtnShuffleSvg = styled(Icon)`
  cursor: pointer;
  path {
    fill: ${(props) => (props.isShuffled ? '#ffffff' : '#696969')};
  }
  &:hover path {
    fill: ${(props) => (props.isShuffled ? '#ffffff' : '#acacac')};
  }

  &:active path {
    fill: #ffffff;
  }

  ${(props) =>
    props.isShuffled &&
    `
    &:active path {
      fill: #ffffff;
    }
  `}
`;

// -----------------PLAYER TRACK PLAY --------------------

export const PlayerTrackPlay = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`;

export const TrackPlayContain = styled.div`
  width: auto;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 2fr;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const TrackPlayImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  -ms-grid-column: 1;
  grid-area: image;
`;

export const TrackPlaySvg = styled(Icon)`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`;

export const TrackPlayAuthor = styled.div`
  -ms-grid-row: 1;
  -ms-grid-column: 2;
  grid-area: author;
  min-width: 49px;
`;

export const TrackPlayAuthorLink = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
`;

export const TrackPlayAlbum = styled.div`
  -ms-grid-row: 2;
  -ms-grid-column: 2;
  grid-area: album;
  min-width: 49px;
`;

export const TrackPlayAlbumLink = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
`;

// ----------------TRACK PLAY LIKE/DIS--------------------

export const TrackPlayLikeDis = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const TrackPlayLike = styled.div`
  padding: 5px;
`;

export const TrackPlayLikeSvg = styled(Icon)`
  cursor: pointer;
  path {
    stroke: #696969;
  }

  &:hover path {
    stroke: #acacac;
  }

  &:active path {
    fill: #696969;
    stroke: #ffffff;
  }
`;

export const TrackPlayDislike = styled(TrackPlayLike)`
  margin-left: 28.5px;
`;

export const TrackPlayDislikeSvg = styled(Icon)`
  cursor: pointer;
  path {
    stroke: #696969;
  }

  &:hover path {
    stroke: #acacac;
  }

  &:active path {
    fill: #696969;
    stroke: #ffffff;
  }
`;

export const DurationTrackBlock = styled.div`
  position: absolute;
  display: flex;
  gap: 5px;
  top: 89%;
  left: 95%;
`;

export const CurrentTrackTime = styled.div`
  color: white;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.016px;
`;
export const DurationTrackTime = styled.div`
  color: white;

  font-variant-numeric: lining-nums proportional-nums;

  font-family: StratosSkyeng;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.016px;
`;
