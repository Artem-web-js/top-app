import { SidebarProps } from "./Sidebar.props";
import { Menu } from "../Menu/Menu";
import { Logo } from "../../public/logo";
import cn from 'classnames';
import styles from './Sidebar.module.css';

export const Sidebar = ({ className, ...rest }: SidebarProps) => {
  return (
    <div {...rest} className={cn(className, styles.sidebar)}>
      <Logo className={styles.logo} />
      <div>Search</div>
      <Menu />
    </div>
  );
};
