import type { NextPage } from 'next';

import Head from 'components/Head';
import Header from 'components/Header';
import Main from 'components/Main';

const Home: NextPage = () => {
  return (
    <div>
      <h1 className='text-center mt-96 dark:text-white text-black text-xl'>
        Website currently under maintenance ...
      </h1>
      {/* <Head />
      <div className='w-3/4 pt-20 mx-auto lg:1/4 md:pt-28'>
        <Header />
        <Main />
      </div> */}
    </div>
  );
};

export default Home;
