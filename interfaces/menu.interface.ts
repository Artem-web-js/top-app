import { TopLevelCategory } from "./page.interface";

export interface PageItem {
  _id: string;
  alias: string;
  title: string;
  category: string;
}

export interface MenuItem {
  _id: {
    secondCategory: string;
  };
  isOpened?: boolean;
  pages: PageItem[];
}

export type FirstLevelMenuItem = {
  id: TopLevelCategory;
  icon: JSX.Element;
  name: string;
  route: string;
};
