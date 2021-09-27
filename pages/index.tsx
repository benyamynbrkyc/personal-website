import type { NextPage } from 'next';

import Head from './components/Head';
import Header from './components/Header';
import Main from './components/Main';

const Home: NextPage = () => {
  return (
    <div className='w-3/4 mx-auto lg:1/4 pt-36'>
      <Head />
      <Header />
      <Main />
    </div>
  );
};

export default Home;
