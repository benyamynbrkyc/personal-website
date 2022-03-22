import Image from 'next/image';

import Head from 'components/meta/Head';
import ChatBubble from 'views/Index/ChatBubble';
import ContactSection from 'views/Index/ContactSection';

export default function Home() {
  return (
    <>
      <Head />
      <ChatBubble />
      <ContactSection />
      <p className='mt-20 flex items-center justify-center gap-2 dark:text-white'>
        <Image
          src='/images/icons/hammer-wrench.webp'
          height={20}
          width={20}
          alt='Tool Emoji'
          priority={true}
        />
        More coming soon...
      </p>
    </>
  );
}
