import styles from "./Sort.module.css";
import { SortEnum, SortProps } from "./Sort.props";
import { SortIcon } from "../../public/Icons";
import cn from "classnames";

export const Sort = ({ sort, setSort, className, ...rest }: SortProps) => {
  return (
    <div className={cn(styles.sort, className)} {...rest}>
      <span
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [styles.active]: sort === SortEnum.Rating
        })}
      >
        <SortIcon className={styles.sortIcon} />По рейтингу
      </span>
      <span
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [styles.active]: sort === SortEnum.Price
        })}
      >
        <SortIcon className={styles.sortIcon} />По цене
      </span>
    </div>
  );
};
