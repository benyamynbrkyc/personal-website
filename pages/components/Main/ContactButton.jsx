function ContactButton({ type }) {
  let href = '';
  let displayText = '';
  let icon = '/icons/';
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
      className='flex flex-row items-center justify-start w-full h-auto p-4 bg-white border-2 shadow-md dark:text-gray-300 dark:shadow-none dark:border-gray-800 dark:bg-black rounded-2xl md:w-72 md:dark:hover:border-blue-700 hover:shadow-lg md:hover:border-gray-400'>
      <div className='pr-4 border-r-2'>
        <img
          className='invert-when-dark'
          src={icon}
          alt={iconAlt}
          width='30'
          height='30'
        />
      </div>
      <div className='flex items-center justify-center w-full '>
        <h1>{displayText}</h1>
        <div className='ml-2'>
          <img
            className='invert-when-dark'
            src={
              !email ? '/icons/open-outline.webp' : '/icons/send-outline.webp'
            }
            width='20'
            height='20'
            alt='External link icon'
          />
        </div>
      </div>
    </a>
  );
}

export default ContactButton;
