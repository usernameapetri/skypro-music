import * as S from './Sidebar.Styles';
export default function SidebarContent({ children }) {
  return (
    <S.SidebarBlock>
      <S.SidebarList>{children}</S.SidebarList>
    </S.SidebarBlock>
  );
}
