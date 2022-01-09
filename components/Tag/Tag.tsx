import styles from "./Tag.module.css";
import {TagProps} from "./Tag.props";
import cn from "classnames";

export const Tag = ({children, size = 's', color = 'ghost', href, className, ...rest}: TagProps) => {
  return (
    <div className={cn(styles.tag, className, styles[color], styles[size])} {...rest}>
      {
        href
          ? (
          <a href={href}>{children}</a>
        )
          : (
            <>{children}</>
          )
      }
    </div>
  );
};
