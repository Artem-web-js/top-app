import { useReducer } from "react";
import { sortReducer } from "./sort.reducer";
import { TopPageComponentProps } from "./TopPageComponent.props";
import { SortEnum } from "../../components/Sort/Sort.props";
import styles from "./TopPageComponent.module.css";
import { TopLevelCategory } from "../../interfaces/page.interface";
import {
  Advantages,
  HhData,
  Htag,
  Product,
  Sort,
  Tag
} from "../../components";

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps) => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="gray" size="m">{products.length}</Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>
        {sortedProducts && sortedProducts.map(p => (
          <Product key={p._id} product={p} />
        ))}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag color="red" size="m">hh.ru</Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag="h2">Преимущества</Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
      <Htag tag="h2">Поолучаемые навыки</Htag>
      {page.tags.map((tag, index) => (
          <Tag color="primary" key={index}>{tag}</Tag>
      ))}
    </div>
  );
};
