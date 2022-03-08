import WorkCard from 'views/Work/WorkCard';

export default function Work() {
  return (
    <div className='text-white'>
      <section className='flex flex-col items-center gap-4'>
        <WorkCard
          key='My title'
          title='eBooks.ba'
          description='Lorem ipsum dolor sit amet.'
          imgUrl='/images/work/ebooks.png'
          tags={['next.js', 'strapi']}
        />
      </section>
    </div>
  );
}
