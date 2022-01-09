import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";
import { ArrowIcon } from "./ArrowIcon";

export const Button = ({ appearance = 'primary', arrow = 'none', children, className, ...rest }: ButtonProps): JSX.Element => {
  return (
    <button className={cn(styles.button, className, styles[appearance])} {...rest}>
      {children}
      {arrow !== 'none' && (
        <span className={cn(styles.arrow, { [styles.down]: arrow === 'down' })}>
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
