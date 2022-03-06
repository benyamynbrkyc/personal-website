import Image from 'next/image';

export enum ContactButtonEnum {
  Email = 'email',
  Linkedin = 'linkedin',
  Github = 'github',
}

function ContactButton({ type }: { type: ContactButtonEnum }) {
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
      className='flex flex-row items-center justify-start w-full h-auto p-4 bg-white border shadow-md dark:text-gray-300 dark:shadow-none dark:border-gray-800 dark:bg-black rounded-2xl md:w-72 md:dark:hover:border-blue-700 hover:shadow-lg md:hover:border-gray-400'>
      <Image
        className='invert-when-dark'
        src={icon}
        alt={iconAlt}
        width={30}
        height={30}
      />
      <span className='flex items-center justify-center w-full'>
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

export default ContactButton;
