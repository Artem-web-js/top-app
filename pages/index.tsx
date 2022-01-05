import type { NextPage } from 'next';
import { Button, Htag } from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance="primary">primary</Button>
      <Button appearance="ghost">ghost</Button>
    </>
  );
};

export default Home;
