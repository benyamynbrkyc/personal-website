import Link from 'next/link';
import { useRouter } from 'next/router';

interface IProps {
  href: string;
  children: JSX.Element | string;
}

export default function NavLink({ href, children }: IProps) {
  const router = useRouter();

  const isActive = () => {
    return router.pathname.endsWith(href);
  };

  return (
    <li className='transition-all hover:text-blue-500'>
      <Link href={href}>
        <a className={`${isActive() && 'text-blue-500'}`}>{children}</a>
      </Link>
    </li>
  );
}
