import Image from 'next/image';

export enum ContactButtonEnum {
  Email = 'email',
  Linkedin = 'linkedin',
  Github = 'github',
}

export default function ContactButton({ type }: { type: ContactButtonEnum }) {
  let href = '';
  let displayText = '';
  let icon = '/images/icons/';
  let iconAlt = '';
  let email = false;

  if (type === 'email') {
    href = 'mailto:benjamin.brkic@gmail.com';
    displayText = 'Email';
    icon += `mail-outline.webp`;
    iconAlt = 'Email Icon';
    email = true;
  } else if (type === 'linkedin') {
    href = 'https://www.linkedin.com/in/benjamin-brkić-4727111b4/';
    displayText = 'LinkedIn';
    icon += 'logo-linkedin.webp';
    iconAlt = 'LinkedIn Icon';
  } else if (type === 'github') {
    href = 'https://github.com/benyamynbrkyc';
    displayText = 'GitHub';
    icon += 'logo-github.webp';
    iconAlt = 'GitHub Icon';
  }

  return (
    <a
      href={href}
      rel='noreferrer'
      target='_blank'
      className='flex h-auto w-full max-w-xs flex-row items-center justify-start rounded-2xl border bg-white p-4 shadow transition-all dark:border-transparent dark:bg-gray-900 dark:text-gray-300 dark:shadow-none md:hover:scale-[1.02] md:hover:border-gray-400 '>
      <Image
        className='invert-when-dark'
        src={icon}
        alt={iconAlt}
        width={30}
        height={30}
      />
      <span className='flex w-full items-center justify-center'>
        <h1 className='mr-2'>{displayText}</h1>
        <img
          className='invert-when-dark'
          src={
            !email
              ? 'images/icons/open-outline.webp'
              : 'images/icons/send-outline.webp'
          }
          width='20'
          height='20'
          alt='External link icon'
        />
      </span>
    </a>
  );
}
