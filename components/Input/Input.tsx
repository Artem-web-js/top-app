import styles from "./Input.module.css";
import { InputProps } from "./Input.props";
import cn from "classnames";

export const Input = ({ className, ...rest }: InputProps) => {
  return <input className={cn(className, styles.input)} {...rest} />;
};
