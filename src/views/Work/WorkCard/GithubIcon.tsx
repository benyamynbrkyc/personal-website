import Image from 'next/image';

export default function GithubIcon() {
  return (
    <Image
      src='/images/github.svg'
      width={22}
      height={16}
      alt='Github icon'
      priority={true}
      className='invert-when-dark'
    />
  );
}
