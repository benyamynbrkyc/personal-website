import Head from 'components/meta/Head';
import Chat from 'views/components/Chat';
import Main from 'views/components/ContactSection';

export default function Home() {
  return (
    <>
      <Head />
      <section className='lg:1/4 mx-auto w-3/4 pt-10 transition-all'>
        <Chat />
        <Main />
        <p className='mt-20 flex items-center gap-2 dark:text-white'>
          <img src='/images/icons/hammer-wrench.webp' height={20} width={20} />
          More coming soon...
        </p>
      </section>
    </>
  );
}
