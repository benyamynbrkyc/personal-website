import 'animate.css';

import ContactButton from 'components/ContactButton';

import { ContactButtonEnum } from 'components/ContactButton';

export default function ContactSection() {
  return (
    <div className='animate__animated animate__fadeInUp animate__delay-1s mt-10 flex flex-col gap-4'>
      <ContactButton type={ContactButtonEnum.Email} />
      <ContactButton type={ContactButtonEnum.Linkedin} />
      <ContactButton type={ContactButtonEnum.Github} />
    </div>
  );
}
