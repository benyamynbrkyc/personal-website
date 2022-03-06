import Head from 'components/meta/Head';
import Chat from 'views/components/Chat';
import Main from 'views/components/ContactSection';

export default function Home() {
  return (
    <>
      <Head />
      <section className='w-3/4 pt-20 mx-auto lg:1/4 md:pt-28'>
        <Chat />
        <Main />
        <p className='flex items-center gap-2 dark:text-white'>
          <img src='/images/icons/hammer-wrench.webp' height={20} width={20} />
          More coming soon...
        </p>
      </section>
    </>
  );
}
