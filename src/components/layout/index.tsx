import Navbar from 'components/layout/Navbar';

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Navbar />
      <main className='mx-auto max-w-2xl px-4 pt-10 transition-all'>
        {children}
      </main>
    </>
  );
}
