import 'animate.css';

import ContactButton from 'views/Index/components/ContactButton';

import { ContactButtonEnum } from 'views/Index/components/ContactButton';

export default function ContactSection() {
  return (
    <div className='animate__animated animate__fadeInUp animate__delay-1s mt-16 flex flex-col items-center gap-4 pb-20'>
      <p className='mb-2 text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400'>
        Get in touch
      </p>
      <ContactButton type={ContactButtonEnum.Email} />
      <ContactButton type={ContactButtonEnum.Linkedin} />
      <ContactButton type={ContactButtonEnum.Github} />
      <ContactButton type={ContactButtonEnum.CV} />
    </div>
  );
}
