import Title from '../components/projects/Title';
import TitleSecondary from '../components/projects/TitleSecondary';

import Image from '../components/projects/Image';

export default function ebooks() {
  return (
    <div className='max-w-2xl py-8 mx-auto text-black dark:text-gray-300'>
      <Title>eBooks Projekt Status</Title>
      <br />
      <TitleSecondary>Početna</TitleSecondary>
      <Image src='/images/projects/ebooks/home.png' />
    </div>
  );
}
