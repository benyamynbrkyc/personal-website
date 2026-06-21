import Head from 'components/meta/Head';
import ChatBubble from 'views/Index/ChatBubble';
import ContactSection from 'views/Index/ContactSection';
import ProfileSummary from 'views/Index/ProfileSummary';

export default function Home() {
  return (
    <>
      <Head />
      <ChatBubble />
      <ProfileSummary />
      <ContactSection />
    </>
  );
}
