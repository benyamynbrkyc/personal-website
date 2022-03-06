import 'animate.css';

import ContactButton from 'components/Main/ContactButton';
import Spacer from 'components/UI/Spacer';

function Main() {
  return (
    <div className='animate__animated animate__fadeInUp animate__delay-1s'>
      <Spacer />

      <ContactButton type='email'></ContactButton>

      <Spacer size='sm' />

      <ContactButton type='linkedin'></ContactButton>

      <Spacer size='sm' />

      <ContactButton type='github'></ContactButton>

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
