import Head from 'next/head';

function HeadTag() {
  return (
    <Head>
      <title>Benjamin Brkic 👨‍💻</title>
      <meta
        name='description'
        content='Hello there, I am Benjamin, a full-stack web developer 👋'
      />
      <link
        rel='icon'
        href='https://img.icons8.com/ios-glyphs/30/000000/globe-earth--v1.png'
      />
      <meta property='og:url' content='https://benjaminbrkic.com/' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Benjamin Brkic 👨‍💻' />
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
  );
}

export default HeadTag;
