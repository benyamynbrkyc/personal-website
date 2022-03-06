import 'animate.css';

import ContactButton from 'components/ContactButton';
import Spacer from 'components/ui/Spacer';

import { ContactButtonEnum } from 'components/ContactButton';

export default function ContactSection() {
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
    </div>
  );
}
