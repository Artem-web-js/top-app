import { SidebarProps } from "./Sidebar.props";
import { Menu } from "../Menu/Menu";

export const Sidebar = ({ ...rest }: SidebarProps) => {
  return (
    <div {...rest}>
      <Menu />
    </div>
  );
};
