import Image from 'next/image';

import type { Tag } from 'views/Work/WorkCard/WorkCardTags';
import WorkTags from 'views/Work/WorkCard/WorkCardTags';
import WorkCardLinks from './WorkCardLinks';

interface IProps {
  title: string;
  description: string;
  imgUrl: string;
  tags: Tag[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function WorkCard({
  title,
  description,
  imgUrl,
  tags,
  liveUrl,
  githubUrl,
}: IProps) {
  return (
    <article className='flex w-full max-w-2xl flex-col gap-2 rounded-2xl border p-6 text-black dark:border-transparent dark:bg-gray-900 dark:text-white'>
      <div className='relative mb-2 rounded-2xl'>
        <Image
          src={imgUrl}
          width={1280}
          height={720}
          alt={title}
          priority={true}
          className='rounded object-cover'
        />
      </div>
      <h1 className='text-2xl font-bold'>{title}</h1>
      <p>{description}</p>
      <WorkTags tags={tags} />
      <WorkCardLinks liveUrl={liveUrl} githubUrl={githubUrl} />
    </article>
  );
}
