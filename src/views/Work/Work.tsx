import WorkCard from 'views/Work/WorkCard';

export default function Work() {
  return (
    <div className='text-white'>
      <section className='flex flex-col items-center gap-12 pb-20'>
        {/* todo: Fetch all this data from an api (an admin panel) */}
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
          githubUrl='https://github.com/benyamynbrkyc/ebooks-frontend'
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
          githubUrl='https://github.com/benyamynbrkyc/exelent'
        />
        
      </section>
    </div>
  );
}
