import type { NextPage } from 'next';
import Head from 'next/head';

import Main from './components/Main';
import ContentFill from './components/ContentFill';

// import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className='container mx-auto'>
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

      <Main />
      <ContentFill />

      {/* <footer>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          Powered by{' '}
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
