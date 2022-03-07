import Navbar from 'components/layout/Navbar';

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Navbar />
      <main className='lg:1/4 mx-auto w-3/4 pt-10 transition-all'>
        {children}
      </main>
    </>
  );
}
