import Head from 'next/head';

export default function HeadTag() {
  return (
    <Head>
      <title>Benjamin Brkić | Full Stack Developer</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta
        name='description'
        content='Benjamin Brkić is a full-stack developer building modern web and mobile products with TypeScript, React, Convex, Java, and Spring Boot.'
      />
      <link rel='icon' type='image/x-icon' href='/favicon.ico' />

      <link rel='canonical' href='https://benjaminbrkic.com/' />
      <meta name='robots' content='index, follow' />
      <meta name='twitter:card' content='summary' />

      {/* Open Graph tags */}
      <meta property='og:type' content='website' />
      <meta
        property='og:title'
        content='Benjamin Brkić | Full Stack Developer'
      />
      <meta
        property='og:description'
        content='Full-stack developer building modern web and mobile products with TypeScript, React, Convex, Java, and Spring Boot.'
      />
      <meta property='og:url' content='https://benjaminbrkic.com/' />
      <meta
        property='og:site_name'
        content='Benjamin Brkić | Full Stack Developer'
      />
      <meta
        property='og:image'
        content={
          'https://ik.imagekit.io/benyo/profilePicSmall_xGywq2h7g?ik-sdk-version=javascript-1.4.3&updatedAt=1646611004683&tr=w-1200%2Ch-628%2Cfo-auto'
        }
      />

      {/* Twitter Cards */}
      <meta
        name='twitter:title'
        content='Benjamin Brkić | Full Stack Developer'
      />
      <meta
        name='twitter:description'
        content='Full-stack developer building modern web and mobile products with TypeScript, React, Convex, Java, and Spring Boot.'
      />
      <meta
        name='twitter:image'
        content='https://ik.imagekit.io/benyo/profilePicSmall_xGywq2h7g?ik-sdk-version=javascript-1.4.3&updatedAt=1646611004683&tr=w-1200%2Ch-675%2Cfo-auto'
      />
      <meta name='twitter:site' content='@bnjmnbrkc' />
      <meta name='twitter:creator' content='@bnjmnbrkc' />
    </Head>
  );
}
