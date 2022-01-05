import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";

export const Button = ({ appearance = 'primary', children, className, ...rest }: ButtonProps): JSX.Element => {
  return (
    <button className={cn(styles.button, className, styles[appearance])} {...rest}>
      {children}
    </button>
  )
}
