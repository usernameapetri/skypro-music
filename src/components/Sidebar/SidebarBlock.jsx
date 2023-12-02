import { Icon } from '../../Icons/Icon';
import * as S from './Sidebar.Styles';
import { useContext } from 'react';
import { AuthContext } from '../../Context/user';
import { Link } from 'react-router-dom';
export default function SidebarBlock({ children }) {
  const { userData } = useContext(AuthContext);

  return (
    <S.MainSidebar className="sidebar">
      <S.SidebarPersonal>
        <S.SidebarPersonalName>
          {userData ? userData.username : ''}
        </S.SidebarPersonalName>
        <Link to="/login">
          <S.SidebarIcon
            onClick={() => {
              localStorage.removeItem('token');
              localStorage.removeItem('user');
            }}
          >
            <Icon name="logout" alt="logout" />
          </S.SidebarIcon>
        </Link>
      </S.SidebarPersonal>
      {children}
    </S.MainSidebar>
  );
}
