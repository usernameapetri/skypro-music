import styled, { keyframes } from 'styled-components';
import { Icon } from '../../Icons/Icon';

export const PlaylistItem = styled.div`
  cursor: pointer;
  width: 100%;
  display: block;
  margin-bottom: 12px;
`;

const pulseAnimation = keyframes`
    0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.7);
  }
  100% {
    transform: scale(1);
  }
`;

export const Circle = styled.div`
  margin-left: 5px;
  width: 50px;
  height: 10px;
  background-color: #b672ff;
  border-radius: 60%;
`;

export const PulsatingCircle = styled(Circle)`
  animation: ${pulseAnimation} 0.5s infinite;
`;

export const PlayListTrack = styled.div`
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
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const TrackTitle = styled.div`
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
  width: 447px;
`;
export const TrackTitleText = styled.div``;

export const TrackTitleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

export const TrackTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
`;

export const TrackAuthor = styled.div`
  width: 321px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

export const TrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
`;

export const TrackAlbum = styled.div`
  width: 245px;
`;

export const TrackAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`;

export const TrackTime = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const TrackTitleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 17px;
`;

export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`;

export const TrackTimeSvg = styled(Icon)`
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

export const TrackRegularLike = styled(TrackTimeSvg)`
  path {
    fill: #b672ff;
  }
`;

export const DefButton = styled.button`
  background-color: transparent;
  color: transparent;
  border: none;
  padding: auto;
`;
