import Head from 'components/meta/Head';
import Chat from 'views/components/Chat';
import ContactSection from 'views/components/ContactSection';

export default function Home() {
  return (
    <>
      <Head />
      <Chat />
      <ContactSection />
      <p className='mt-20 flex items-center justify-center gap-2 dark:text-white'>
        <img src='/images/icons/hammer-wrench.webp' height={20} width={20} />
        More coming soon...
      </p>
    </>
  );
}
