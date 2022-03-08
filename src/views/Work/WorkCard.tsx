import Image from 'next/image';

import type { Tag } from 'views/Work/WorkTags';
import WorkTags from 'views/Work/WorkTags';

interface IProps {
  title: string;
  description: string;
  imgUrl: string;
  tags: Tag[];
}

export default function WorkCard({ title, description, imgUrl, tags }: IProps) {
  return (
    <article className='flex w-full max-w-2xl flex-col gap-2 rounded-2xl border p-6 text-black dark:border-transparent dark:bg-gray-900 dark:text-white'>
      <div className='relative mb-2 rounded-2xl'>
        <Image
          src={imgUrl}
          objectFit='cover'
          className='rounded'
          width={1280}
          height={720}
        />
      </div>
      <h1 className='text-2xl font-bold'>{title}</h1>
      <p>{description}</p>
      <WorkTags tags={tags} />
    </article>
  );
}
