import type { NextPage } from 'next';
import {Button, Htag, Ptag, Tag} from '../components';
import {Rating} from "../components/Rating/Rating";
import {useState} from "react";

const Home: NextPage = () => {
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
      <Tag color="grey" size="s">test</Tag>
      <Tag color="red" size="m" href="https://www.youtube.com/">YouTube</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
};

export default Home;
