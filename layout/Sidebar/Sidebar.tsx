import { SidebarProps } from "./Sidebar.props";
import { Menu } from "../Menu/Menu";
import { Search } from "../../components";
import { Logo } from "../../public/logo";
import cn from 'classnames';
import styles from './Sidebar.module.css';

export const Sidebar = ({ className, ...rest }: SidebarProps) => {
  return (
    <div {...rest} className={cn(className, styles.sidebar)}>
      <Logo className={styles.logo} />
      <Search />
      <Menu />
    </div>
  );
};
