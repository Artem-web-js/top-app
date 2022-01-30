import React, { useState } from "react";
import type { GetStaticProps } from 'next';
import axios from "axios";

import {Button, Htag, Input, Ptag, Tag, TextArea} from '../components';
import { Rating } from "../components/Rating/Rating";
import { withLayout } from "../layout/Layout";
import { MenuItem } from "../interfaces/menu.interface";

const Home = ({ menu }: HomeProps): JSX.Element => {
  const [rating, setRating] = useState<number>(0);

  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance="primary" arrow="right">primary</Button>
      <Button appearance="ghost" arrow="right">ghost</Button>
      <Ptag type="normal">Хорошо структурирован курс, быстрый отклик преподователей, качество подачи материала</Ptag>
      <Ptag type="medium">Хорошо структурирован курс, быстрый отклик преподователей, качество подачи материала</Ptag>
      <Ptag type="bold">Хорошо структурирован курс, быстрый отклик преподователей, качество подачи материала</Ptag>
      <Tag color="ghost" size="s">test</Tag>
      <Tag color="primary" size="s">test</Tag>
      <Tag color="green" size="m">test</Tag>
      <Tag color="gray" size="s">test</Tag>
      <Tag color="red" size="m" href="https://www.youtube.com/">YouTube</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder={"Name"} />
      <TextArea placeholder={"Text area"} />
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } =
    await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', { firstCategory });

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[];
  firstCategory: number;
}
