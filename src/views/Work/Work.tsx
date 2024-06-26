import WorkCard from 'views/Work/WorkCard';
import Head from 'components/meta/Head';

export default function Work() {
  return (
    <>
      <Head />
      <div className='text-white'>
        <section className='flex flex-col items-center gap-12 pb-20'>
          <WorkCard
            key='ProFarm'
            title='ProFarm'
            description={`ProFarm Pharmacy's custom-tailored Ecommerce experience tightly integrated with a rich CMS.`}
            imgUrl='/images/work/profarm.webp'
            tags={[
              { name: 'Pharmacy', color: '#85cc37' },
              { name: 'Ecommerce', color: '#098061' },
              { name: 'Next.js', color: '#0983e5' },
              { name: 'Tailwind', color: '#62BAF3' },
            ]}
            liveUrl='https://web.profarm.ba'
          />
          <WorkCard
            key='Primavera Estate Apartments'
            title='Primavera Estate Apartments'
            description={`Book your perfect stay in Pula through Primavera's custom online booking system.`}
            imgUrl='/images/work/primavera-estate-apartments.webp'
            tags={[
              { name: 'Online Booking', color: '#85cc37' },
              { name: 'Internationalization/i18n', color: '#ADDFFF' },
              { name: 'Gallery', color: '#ff9800' },
              { name: 'SEO', color: '#ff9800' },
              { name: 'Next.js', color: '#0983e5' },
            ]}
            liveUrl='https://primaveraestate-apartments.com'
          />
          <WorkCard
            key='Winpoint'
            title='Winpoint'
            description='Make predictions on esports matches for free and win awesome prizes every week.'
            imgUrl='/images/work/winpoint.webp'
            tags={[
              { name: 'Predictions Platform', color: '#85cc37' },
              { name: 'Virtual Item Exchange', color: '#dc292c' },
              { name: 'Next.js', color: '#0983e5' },
              { name: 'PayPal', color: '#0470b7' },
              { name: 'Tailwind', color: '#62BAF3' },
              { name: 'Internationalization/i18n', color: '#ADDFFF' },
            ]}
          />
          <WorkCard
            key='Natron-Hayat'
            title='Natron-Hayat'
            description='Natron-Hayat is a fully integrated unbleached pulp and paper mill enjoying high reputation in the field of production of various types of paper and paper packaging.'
            imgUrl='/images/work/natron-hayat.webp'
            tags={[
              { name: 'Next.js', color: '#0983e5' },
              { name: 'Tailwind', color: '#62BAF3' },
              { name: 'Internationalization/i18n', color: '#ADDFFF' },
            ]}
            liveUrl='https://www.natron-hayat.ba'
          />
          <WorkCard
            key='YA Dictum Factum Maglaj'
            title='YA Dictum Factum Maglaj'
            description='Fostering Creative Leadership: Uniting Communities and Empowering Youth.'
            imgUrl='/images/work/ya-dictum-factum-maglaj.webp'
            tags={[
              { name: 'Next.js', color: '#0070f3' },
              { name: 'Internationalization/i18n', color: '#ADDFFF' },
              { name: 'SSR (Server-Side Rendering)', color: '#f44336' },
              { name: 'CMS (Content Management System)', color: '#ff9800' },
            ]}
            liveUrl='https://dictumfactum.org'
          />
          {/* <WorkCard
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
          /> */}
          {/* <WorkCard
            key='EXElent'
            title='EXElent'
            description='Software development firm showcase website'
            imgUrl='/images/work/exelent.webp'
            tags={[
              { name: 'Web Design', color: '#0983e5' },
              { name: 'Business', color: '#b6b6b6' },
            ]}
            liveUrl='https://www.exelent.net/'
          /> */}
        </section>
      </div>
    </>
  );
}
