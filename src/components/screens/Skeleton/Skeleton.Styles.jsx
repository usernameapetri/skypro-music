import styled from 'styled-components';
//----------------SKELETON BAR------------------------
export const SkeletonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 0px;
  align-items: center;
`;

export const SkeletonImg = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  background-color: #313131;
  width: 51px;
  height: 51px;
`;

export const SkeletonAuthor = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  background-color: #313131;
  width: 59px;
  height: 15px;
`;

export const SkeletonAlbum = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  background-color: #313131;
  width: 59px;
  height: 15px;
`;

//----------------SKELETON SIDEBAR--------------

export const SkeletonSidebar = styled.div`
  height: 100%;
  padding: 240px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  display: flex;
  gap: 30px;
`;
export const SkeletonSidebarBlock = styled.div`
  background-color: #313131;
  width: 250px;
  height: 150px;
`;

//---------------------SKELETON TRACK------------------
export const SkeletonPlaylist = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 24px;
`;
export const SkeletonImgTrack = styled.div`
  background-color: #313131;
  width: 51px;
  height: 51px;
`;
export const SkeletonSelectorTrack = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const SkeletonTrackTitle = styled.div`
  background-color: #313131;
  width: 356px;
  height: 19px;
`;

export const SkeletonTrackAuthor = styled.div`
  background-color: #313131;
  width: 271px;
  height: 19px;
`;
export const SkeletonTrackAlbum = styled.div`
  background-color: #313131;
  width: 305px;
  height: 19px;
`;
