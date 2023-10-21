
import * as S from './Skeleton.Styles';
function SkeletonBar() {
  return (
    <S.SkeletonWrapper>
      <S.SkeletonImg />
      <S.SkeletonAuthor />
      <S.SkeletonAlbum />
    </S.SkeletonWrapper>
  );
}

export default SkeletonBar;
