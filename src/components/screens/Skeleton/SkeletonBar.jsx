import './Skeleton.css';
function SkeletonBar() {
  return (
    <div className="skeleton__wrapper">
      <div className="skeleton__img"></div>
      <div className="skeleton__author"></div>
      <div className="skeleton__album"></div>
    </div>
  );
}

export default SkeletonBar;
