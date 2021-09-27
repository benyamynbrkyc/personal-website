import 'animate.css';

import ContactButton from './ContactButton';
import Spacer from '../UI/Spacer';

function Main() {
  return (
    <div className='animate__animated animate__fadeInUp animate__delay-1s'>
      <Spacer />
      <ContactButton type='email'></ContactButton>
      <Spacer size='sm' />

      <ContactButton type='linkedin'></ContactButton>
      <Spacer size='sm' />
      <ContactButton type='github'></ContactButton>
    </div>
  );
}

export default Main;
