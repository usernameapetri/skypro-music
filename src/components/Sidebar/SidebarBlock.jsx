import { Icon } from '../../Icons/Icon';
import * as S from './Sidebar.Styles';
export default function SidebarBlock({ children }) {
  return (
    <S.MainSidebar className="sidebar">
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon>
          <Icon name="logout" alt="logout" />
        </S.SidebarIcon>
      </S.SidebarPersonal>
      {children}
    </S.MainSidebar>
  );
}

