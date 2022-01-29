import styles from "./Card.module.css";
import { CardProps } from "./Card.props";
import cn from "classnames";

export const Card = ({children, color = 'white', className, ...rest}: CardProps) => {
  return (
    <div className={cn(styles.card, className, styles[color])} {...rest}>
      {children}
    </div>
  );
};
