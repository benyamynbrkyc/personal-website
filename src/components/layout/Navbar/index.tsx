import Link from 'next/link';
import NavLink from 'components/layout/Navbar/NavLink';

export default function Navbar() {
  return (
    <nav className='p-8 pt-12 text-2xl text-black transition-all dark:text-white'>
      <ul className='flex items-center justify-center gap-8'>
        <NavLink href='/'>Home</NavLink>
        <NavLink href='/work'>Work</NavLink>
      </ul>
    </nav>
  );
}
