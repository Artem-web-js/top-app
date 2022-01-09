import styles from "./Ptag.module.css";
import {PtagProps} from "./Ptag.props";
import cn from "classnames";

export const Ptag = ({children, type = 'normal', className, ...rest}: PtagProps) => {
  return <p className={cn(styles.p, className, styles[type])} {...rest}>{children}</p>;
};
