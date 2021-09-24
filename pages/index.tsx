import type { NextPage } from 'next';
import Head from 'next/head';

import Header from './components/Header';
import Main from './components/Main';
import ContentFill from './components/ContentFill';

// import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className='w-3/4 mx-auto lg:1/4 pt-36'>
      <Head>
        <title>My app</title>
        <meta
          name='description'
          content='Hello there, I am Benjamin, a full-stack web developer 👋'
        />
        <link
          rel='icon'
          href='https://img.icons8.com/ios-glyphs/30/000000/globe-earth--v1.png'
        />
        <meta property='og:url' content='https://benyamynbrkyc.vercel.app/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='My app ⚛️' />
        <meta name='twitter:card' content='summary' />
        <meta
          property='og:description'
          content='Hello there, I am Benjamin, a full-stack web developer 👋'
        />
        <meta
          property='og:image'
          content={
            'https://static.wikia.nocookie.net/calimero/images/b/bf/Calimero-big.jpg/revision/latest?cb=20161205030002'
          }
        />
      </Head>

      <Header />
      <Main />

      {/* <ContentFill /> */}
    </div>
  );
};

export default Home;
