import type { NextPage } from 'next';

import Head from './components/Head';
import Header from './components/Header';
import Main from './components/Main';

const Home: NextPage = () => {
  return (
    <div>
      <Head />
      <div className='w-3/4 pt-20 mx-auto lg:1/4 md:pt-28'>
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default Home;
