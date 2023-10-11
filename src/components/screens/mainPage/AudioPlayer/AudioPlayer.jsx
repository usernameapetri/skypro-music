import { useEffect, useState } from 'react';
import { Icon } from '../../Icons/Icon';
import SkeletonBar from '../../Skeleton/SkeletonBar';
export default function AudioPlayer() {
  const [bar, setBar] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBar(true);
    }, 3000);
  });

  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__player-progress"></div>
        <div className="bar__player-block">
          <div className="bar__player player">
            <div className="player__controls">
              <div className="player__btn-prev">
                <Icon
                  className="player__btn-prev-svg"
                  player__btn-prev-svg
                  name="prev"
                />
              </div>
              <div className="player__btn-play _btn">
                <Icon name="play" className="player__btn-play-svg" alt="play" />
              </div>
              <div className="player__btn-next">
                <Icon name="next" className="player__btn-next-svg" alt="next" />
              </div>
              <div className="player__btn-repeat _btn-icon">
                <Icon
                  name="repeat"
                  className="player__btn-repeat-svg"
                  alt="repeat"
                />
              </div>
              <div className="player__btn-shuffle _btn-icon">
                <Icon
                  name="shuffle"
                  className="player__btn-shuffle-svg"
                  alt="shuffle"
                />
              </div>
            </div>

            <div className="player__track-play track-play">
              {bar && (
                <div className="track-play__contain">
                  <div className="track-play__image">
                    <Icon name="note" className="track-play__svg" alt="music" />
                  </div>
                  <div className="track-play__author">
                    <a className="track-play__author-link" href="http://">
                      Ты та...
                    </a>
                  </div>
                  <div className="track-play__album">
                    <a className="track-play__album-link" href="http://">
                      Баста
                    </a>
                  </div>
                </div>
              )}

              {!bar && <SkeletonBar />}

              <div className="track-play__like-dis">
                <div className="track-play__like _btn-icon">
                  <Icon
                    name="like"
                    className="track-play__like-svg"
                    alt="like"
                  />
                </div>
                <div className="track-play__dislike _btn-icon">
                  <Icon
                    name="dislike"
                    className="track-play__dislike-svg"
                    alt="dislike"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bar__volume-block volume">
            <div className="volume__content">
              <div className="volume__image">
                <Icon name="volume" className="volume__svg" alt="volume" />
              </div>
              <div className="">
                <input
                  name="range"
                  className="volume__progress-line _btn"
                  type="range"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
