import Navbar from 'components/layout/Navbar';

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
