import styles from "./TextArea.module.css";
import { TextAreaProps } from "./TextArea.props";
import cn from "classnames";

export const TextArea = ({ className, ...rest }: TextAreaProps) => {
  return <textarea className={cn(className, styles.textArea)} {...rest} />;
};
