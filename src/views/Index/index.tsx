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
    </>
  );
}
