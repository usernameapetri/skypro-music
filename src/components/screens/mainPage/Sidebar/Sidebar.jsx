import { useState } from 'react';
import imgPlaylist01 from '../../../../assets/playlist01.png';
import imgPlaylist02 from '../../../../assets/playlist02.png';
import imgPlaylist03 from '../../../../assets/playlist03.png';
import { Icon } from '../../Icons/Icon';
import { useEffect } from 'react';
import SkeletonSidebar from '../../Skeleton/SkeletonSidebar';
import * as S from './Sidebar.Styles';
export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSidebar(true);
    }, 3000);
  });

  return (
    <S.MainSidebar className="sidebar">
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon>
          <Icon name="logout" alt="logout" />
        </S.SidebarIcon>
      </S.SidebarPersonal>
      {sidebar && (
        <S.SidebarBlock>
          <S.SidebarList>
            <S.SidebarItem>
              <S.SidebarLink href="#">
                <S.SidebarImg src={imgPlaylist01} alt="day's playlist" />
              </S.SidebarLink>
            </S.SidebarItem>
            <S.SidebarItem>
              <S.SidebarLink href="#">
                <S.SidebarImg src={imgPlaylist02} alt="day's playlist" />
              </S.SidebarLink>
            </S.SidebarItem>
            <S.SidebarItem>
              <S.SidebarLink href="#">
                <S.SidebarImg src={imgPlaylist03} alt="day's playlist" />
              </S.SidebarLink>
            </S.SidebarItem>
          </S.SidebarList>
        </S.SidebarBlock>
      )}

      {!sidebar && <SkeletonSidebar />}
    </S.MainSidebar>
  );
}
