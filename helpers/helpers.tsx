import {FirstLevelMenuItem} from "../interfaces/menu.interface";
import {TopLevelCategory} from "../interfaces/page.interface";
import {BooksIcon, CoursesIcon, ProductsIcon, ServicesIcon} from "../public/Icons";
import React from "react";

export const firstLevelMenu: FirstLevelMenuItem[] = [
  { id: TopLevelCategory.Courses, name: 'Курсы', route: 'courses', icon: <CoursesIcon /> },
  { id: TopLevelCategory.Services, name: 'Сервисы', route: 'services', icon: <ServicesIcon /> },
  { id: TopLevelCategory.Books, name: 'Книги', route: 'books', icon: <BooksIcon /> },
  { id: TopLevelCategory.Products, name: 'Продукты', route: 'products', icon: <ProductsIcon /> },
];

export const digitSeparator = (price: number) => (
  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
);
