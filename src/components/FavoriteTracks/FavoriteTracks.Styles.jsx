import styled from 'styled-components';
import { Icon } from '../../Icons/Icon';
export const CenterBlockH2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`;

export const CenterBlockContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const ContentTitle = styled.div`
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
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const PlaylistTitleCol = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
  width: ${(props) => props.width || '0px'};
`;

export const PlaylistTitleColExtra = styled(PlaylistTitleCol)`
  text-align: end;
  width: 60px;
`;

export const StyledIcon = styled(Icon)`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
  text-align: end;
`;

export const ContentPlaylist = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;
`;

export const NotFoundTrack = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`;
