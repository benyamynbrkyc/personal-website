import Image from 'next/image';

import Title from '../components/projects/Title';
import TitleMedium from '../components/projects/TitleMedium';

export default function ebooks() {
  return (
    <div className='max-w-2xl py-8 mx-auto text-black dark:text-gray-300'>
      <Title>eBooks Projekt Status</Title>
      <br />

      <TitleMedium>Početna</TitleMedium>
    </div>
  );
}
