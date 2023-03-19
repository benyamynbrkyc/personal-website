import WorkCard from 'views/Work/WorkCard';
import Head from 'components/meta/Head';

export default function Work() {
  return (
    <>
      <Head />
      <div className='text-white'>
        <section className='flex flex-col items-center gap-12 pb-20'>
          {/* todo: Fetch all this data from an api (an admin panel) */}
          <WorkCard
            key='Winpoint'
            title='Winpoint'
            description='Make predictions on esports matches for free and win awesome prizes every week.'
            imgUrl='/images/work/winpoint.webp'
            tags={[
              { name: 'Next.js', color: '#0983e5' },
              { name: 'PayPal', color: '#0470b7' },
              { name: 'Tailwind', color: '#62BAF3' },
              { name: 'Internationalization/i18n', color: '#B1E457' },
            ]}
            liveUrl='https://www.winpoint.gg'
          />
          <WorkCard
            key='eBooks.ba'
            title='eBooks.ba'
            description='Online platform for reading, buying and selling e-books.'
            imgUrl='/images/work/ebooks.webp'
            tags={[
              { name: 'Next.js', color: '#0983e5' },
              { name: 'Strapi', color: '#ff4aff' },
              { name: 'PayPal', color: '#0470b7' },
              { name: 'Ecommerce', color: '#098061' },
            ]}
            liveUrl='https://www.ebooks.ba'
          />
          <WorkCard
            key='EXElent'
            title='EXElent'
            description='Software development firm showcase website'
            imgUrl='/images/work/exelent.webp'
            tags={[
              { name: 'Web Design', color: '#0983e5' },
              { name: 'Business', color: '#b6b6b6' },
            ]}
            liveUrl='https://www.exelent.net/'
          />
        </section>
      </div>
    </>
  );
}
