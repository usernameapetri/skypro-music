import { useEffect, useState } from 'react';
import { Icon } from '../../Icons/Icon';
import SkeletonTrack from '../../Skeleton/SkeletonTrack';
export default function Track() {
  const [tracks, setTrack] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTrack(true);
    }, 3000);
  });
  return (
    <div className="playlist__item">
      {tracks && (
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              <Icon className="track__title-svg" alt="music" name="note" />
            </div>
            <div className="track__title-text">
              <a className="track__title-link" href="http://">
                Guilt <span className="track__title-span"></span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://">
              Nero
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              Welcome Reality
            </a>
          </div>
          <div className="track__time">
            <Icon className="track__time-svg" alt="time" name="like" />
            <span className="track__time-text">4:44</span>
          </div>
        </div>
      )}

      {!tracks && [1, 2, 3, 4, 5].map((n) => <SkeletonTrack key={n} />)}
    </div>
  );
}
