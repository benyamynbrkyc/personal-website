import 'animate.css';

import ContactButton from 'components/Main/ContactButton';
import Spacer from 'components/UI/Spacer';

import { ContactButtonEnum } from 'components/Main/ContactButton';

function Main() {
  return (
    <div className='animate__animated animate__fadeInUp animate__delay-1s'>
      <Spacer />

      <ContactButton type={ContactButtonEnum.Email} />

      <Spacer size='sm' />

      <ContactButton type={ContactButtonEnum.Linkedin} />

      <Spacer size='sm' />

      <ContactButton type={ContactButtonEnum.Github} />

      <Spacer />
      <Spacer />

      <p className='flex items-center gap-2 dark:text-white'>
        <img src='/images/icons/hammer-wrench.webp' height={20} width={20} />
        More coming soon...
      </p>
    </div>
  );
}

export default Main;
