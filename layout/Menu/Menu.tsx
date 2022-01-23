import React, {useContext} from "react";
import Link from "next/link";
import cn from "classnames";

import { AppContext } from "../../context/app.context";
import {FirstLevelMenuItem, PageItem} from "../../interfaces/menu.interface";
import { TopLevelCategory } from "../../interfaces/page.interface";
import { CoursesIcon, BooksIcon, ProductsIcon, ServicesIcon } from "../../public/Icons";
import styles from './Menu.module.css';

const firstLevelMenu: FirstLevelMenuItem[] = [
  { id: TopLevelCategory.Courses, name: 'Курсы', route: 'courses', icon: <CoursesIcon /> },
  { id: TopLevelCategory.Services, name: 'Сервисы', route: 'services', icon: <ServicesIcon /> },
  { id: TopLevelCategory.Books, name: 'Книги', route: 'books', icon: <BooksIcon /> },
  { id: TopLevelCategory.Products, name: 'Продукты', route: 'products', icon: <ProductsIcon /> },
];

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(menu => (
          <div key={menu.route}>
            <Link href={`${menu.route}`}>
              <a>
                <div className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: menu.id === firstCategory
                })}>
                  {menu.icon}
                  <span>{menu.name}</span>
                </div>
              </a>
            </Link>
            {menu.id === firstCategory && buildSecondLevel(menu)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(secondMenu => (
          <div key={secondMenu._id.secondCategory}>
            <div className={styles.secondLevel}>
              {secondMenu._id.secondCategory}
            </div>
            <div className={cn(styles.secondLevelBlock, {
              [styles.secondLevelBlockOpened]: secondMenu.isOpened,
            })}>
              {buildThirdLevel(secondMenu.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      pages.map(page => (
        <Link key={`${route}-${page.alias}`} href={`/${route}/${page.alias}`}>
          <a className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: false,
          })}>
            {page.category}
          </a>
        </Link>
      ))
    );
  };

  return (
    <div className={styles.menu}>
      {buildFirstLevel()}
    </div>
  );
};
