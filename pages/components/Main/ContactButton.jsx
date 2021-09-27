import Image from 'next/image';
import { useEffect, useState } from 'react';

function ContactButton({ type }) {
  const [mode, setMode] = useState('light');

  let href = '';
  let displayText = '';
  let icon = '/icons/';
  let iconAlt = '';
  let external = false;

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        // e.matches - dark if true, light if false
        if (e.matches) {
          setMode('dark');
        } else {
          setMode('light');
        }
      });
  }, []);

  if (type === 'email') {
    href = 'mailto:benjamin.brkic@gmail.com';
    displayText = 'Email';
    icon += `mail-outline${mode == 'dark' ? '-light' : ''}.webp`;
    iconAlt = 'Email Icon';
  } else if (type === 'linkedin') {
    href = 'https://www.linkedin.com/in/benjamin-brkić-4727111b4/';
    displayText = 'LinkedIn';
    icon += 'logo-linkedin.webp';
    iconAlt = 'LinkedIn Icon';
    external = true;
  } else if (type === 'github') {
    href = 'https://github.com/benyamynbrkyc';
    displayText = 'GitHub';
    icon += 'logo-github.webp';
    iconAlt = 'GitHub Icon';
    external = true;
  }

  return (
    <a
      href={href}
      rel='noreferrer'
      target='_blank'
      className='flex flex-row items-center justify-start w-full h-auto p-4 bg-white border shadow-md rounded-2xl md:w-72'>
      <div className='pr-4 border-r-2'>
        <Image src={icon} alt={iconAlt} width='30' height='30' />
      </div>
      <div className='flex justify-center w-full'>
        <p>{displayText}</p>
        {external && (
          <div className='ml-2'>
            <Image
              src={`/icons/open-outline${mode == 'dark' ? '-light' : ''}.webp`}
              width='20'
              height='20'
              alt='External link icon'
            />
          </div>
        )}
      </div>
    </a>
  );
}

export default ContactButton;
