import * as S from './Skeleton.Styles';
function SkeletonTrack() {
  return (
    <S.SkeletonPlaylist>
      <S.SkeletonImgTrack />
      <S.SkeletonSelectorTrack>
        <S.SkeletonTrackTitle />
        <S.SkeletonTrackAuthor />
        <S.SkeletonTrackAlbum />
      </S.SkeletonSelectorTrack>
    </S.SkeletonPlaylist>
  );
}

export default SkeletonTrack;
