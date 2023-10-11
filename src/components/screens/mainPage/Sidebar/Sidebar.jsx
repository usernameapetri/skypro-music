import { useState } from 'react';
import imgPlaylist01 from '../../../../assets/playlist01.png';
import imgPlaylist02 from '../../../../assets/playlist02.png';
import imgPlaylist03 from '../../../../assets/playlist03.png';
import { Icon } from '../../Icons/Icon';
import { useEffect } from 'react';
import SkeletonSidebar from '../../Skeleton/SkeletonSidebar';

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSidebar(true);
    }, 3000);
  });

  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__icon">
          <Icon name="logout" alt="logout" />
        </div>
      </div>
      {sidebar && (
        <div className="sidebar__block">
          <div className="sidebar__list">
            <div className="sidebar__item">
              <a className="sidebar__link" href="#">
                <img
                  className="sidebar__img"
                  src={imgPlaylist01}
                  alt="day's playlist"
                />
              </a>
            </div>
            <div className="sidebar__item">
              <a className="sidebar__link" href="#">
                <img
                  className="sidebar__img"
                  src={imgPlaylist02}
                  alt="day's playlist"
                />
              </a>
            </div>
            <div className="sidebar__item">
              <a className="sidebar__link" href="#">
                <img
                  className="sidebar__img"
                  src={imgPlaylist03}
                  alt="day's playlist"
                />
              </a>
            </div>
          </div>
        </div>
      )}

      {!sidebar && <SkeletonSidebar />}
    </div>
  );
}
