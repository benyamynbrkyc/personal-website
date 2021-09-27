function ContactButton({ type }) {
  let href = '';
  let displayText = '';
  let icon = '/icons/';
  let iconAlt = '';
  let external = false;

  if (type === 'email') {
    href = 'mailto:benjamin.brkic@gmail.com';
    displayText = 'Email';
    icon += 'mail-outline.svg';
    iconAlt = 'Email Icon';
  } else if (type === 'linkedin') {
    href = 'https://www.linkedin.com/in/benjamin-brkić-4727111b4/';
    displayText = 'LinkedIn';
    icon += 'logo-linkedin.svg';
    iconAlt = 'LinkedIn Icon';
    external = true;
  } else if (type === 'github') {
    href = 'https://github.com/benyamynbrkyc';
    displayText = 'GitHub';
    icon += 'logo-github.svg';
    iconAlt = 'GitHub Icon';
    external = true;
  }

  return (
    <a
      href={href}
      target='_blank'
      className='flex flex-row items-center justify-start w-full h-auto p-4 bg-white border shadow-md rounded-2xl md:w-72'>
      <div className='pr-4 border-r-2'>
        <img src={icon} alt={iconAlt} width='30' height='30' />
      </div>
      <div className='flex justify-center w-full'>
        <p>{displayText}</p>
        {external && (
          <img
            src='/icons/open-outline.svg'
            width='20'
            height='20'
            alt='External link icon'
            className='ml-2'
          />
        )}
      </div>
    </a>
  );
}

export default ContactButton;
