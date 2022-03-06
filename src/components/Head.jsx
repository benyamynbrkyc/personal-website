import Head from 'next/head';

function HeadTag() {
  return (
    <Head>
      <title>Benjamin Brkic | Freelance Full Stack Web Developer</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta
        name='description'
        content='Hello there, I am Benjamin, a full-stack web developer 👋. I strive to deliver the best possible digital products using the latest industry standards.'
      />
      <link rel='icon' type='image/x-icon' href='/favicon.ico' />

      <link rel='canonical' href='http://www.benjaminbrkic.com/' />
      <meta name='robots' content='index, follow' />
      <meta name='twitter:card' content='summary' />

      {/* Open Graph tags */}
      <meta property='og:type' content='website' />
      <meta
        property='og:title'
        content='Benjamin Brkic 👨‍💻 | Freelance Full Stack Web Developer'
      />
      <meta
        property='og:description'
        content='Hello there, I am Benjamin, a full-stack web developer 👋. I strive to deliver the best possible digital products using the latest industry standards.'
      />
      <meta property='og:url' content='https://www.benjaminbrkic.com/' />
      <meta
        property='og:site_name'
        content='Benjamin Brkic 👨‍💻 | Freelance Full Stack Web Developer'
      />
      <meta
        property='og:image'
        content={
          'https://ik.imagekit.io/benyo/profile_pic_DdTEnzaiHU.jpg?updatedAt=1632772933637'
        }
      />

      {/* Twitter Cards */}
      <meta
        name='twitter:title'
        content='Benjamin Brkic 👨‍💻 | Freelance Full Stack Web Developer'
      />
      <meta
        name='twitter:description'
        content='Hello there, I am Benjamin, a full-stack web developer 👋. I strive to deliver the best possible digital products using the latest industry standards.'
      />
      <meta
        name='twitter:image'
        content='https://ik.imagekit.io/benyo/profile_pic_DdTEnzaiHU.jpg?updatedAt=1632772933637'
      />
      <meta name='twitter:site' content='@bnjmnbrkc' />
      <meta name='twitter:creator' content='@bnjmnbrkc' />
    </Head>
  );
}

export default HeadTag;
