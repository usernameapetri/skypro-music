import { useState } from 'react';
import imgPlaylist01 from '../../assets/playlist01.png';
import imgPlaylist02 from '../../assets/playlist02.png';
import imgPlaylist03 from '../../assets/playlist03.png';
import { useEffect } from 'react';
import SkeletonSidebar from '../Skeleton/SkeletonSidebar';
import * as S from './Sidebar.Styles';
import SidebarBlock from './SidebarBlock';
import SidebarContent from './SideabrContent';

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSidebar(true);
    }, 3000);
  });

  return (
    <SidebarBlock>
      {sidebar && (
        <SidebarContent>
          <S.SidebarItem>
            <S.SidebarLink to="/category/1">
              <S.SidebarImg src={imgPlaylist01} alt="day's playlist" />
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink to="/category/2">
              <S.SidebarImg src={imgPlaylist02} alt="day's playlist" />
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink to="/category/3">
              <S.SidebarImg src={imgPlaylist03} alt="day's playlist" />
            </S.SidebarLink>
          </S.SidebarItem>
        </SidebarContent>
      )}

      {!sidebar && <SkeletonSidebar />}
    </SidebarBlock>
  );
}
