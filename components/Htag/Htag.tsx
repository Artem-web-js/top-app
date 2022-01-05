import {HtagProps} from "./Htag.props";
import styles from "./Htag.module.css";

export const Htag = ({ tag = 'h1', children }: HtagProps): JSX.Element => {
  const Tag = tag;
  return (
    <div>
      <Tag className={styles[tag]}>
        {children}
      </Tag>
    </div>
  );
};
