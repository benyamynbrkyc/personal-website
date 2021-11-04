import Image from 'next/image';

import { ExternalLinkIcon } from '@heroicons/react/outline';

export default function ImageComponent({ src }) {
  return (
    <div className='flex flex-col my-4'>
      <div className='w-full mb-2 overflow-y-auto border border-gray-200 hide-scrollbar dark:border-gray-800 h-96 rounded-xl'>
        <div className='relative w-full h-screen'>
          <Image
            className='rounded'
            src={src}
            layout='fill'
            objectFit='contain'
            objectPosition='top'></Image>
        </div>
      </div>

      <a
        target='_blank'
        href={process.env.NEXT_HOST_URL + src}
        className='flex items-center justify-center gap-2 text-xs'>
        <span>Otvori sliku u novoj kartici</span>
        <ExternalLinkIcon className='w-3 h-3' />
      </a>
    </div>
  );
}
