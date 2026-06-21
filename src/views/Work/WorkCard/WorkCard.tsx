import Image from 'next/image';

import type { Tag } from 'views/Work/WorkCard/WorkCardTags';
import WorkTags from 'views/Work/WorkCard/WorkCardTags';
import WorkCardLinks from './WorkCardLinks';

interface IProps {
  title: string;
  description: string;
  highlights: string[];
  imgUrl?: string;
  tags: Tag[];
  liveUrl?: string;
  githubUrl?: string;
  priority?: boolean;
}

export default function WorkCard({
  title,
  description,
  highlights,
  imgUrl,
  tags,
  liveUrl,
  githubUrl,
  priority = false,
}: IProps) {
  return (
    <article className='flex w-full max-w-2xl flex-col gap-3 rounded-2xl border p-6 text-black dark:border-transparent dark:bg-gray-900 dark:text-white'>
      {imgUrl ? (
        <div className='relative mb-2 overflow-hidden rounded-2xl'>
          <Image
            src={imgUrl}
            width={1280}
            height={720}
            alt={`${title} project preview`}
            priority={priority}
            className='rounded object-cover'
          />
        </div>
      ) : null}
      <h2 className='text-2xl font-bold'>{title}</h2>
      <p className='leading-7 text-gray-700 dark:text-gray-300'>{description}</p>
      <ul className='ml-5 list-disc space-y-1 text-sm leading-6 text-gray-600 dark:text-gray-400'>
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <WorkTags tags={tags} />
      <WorkCardLinks liveUrl={liveUrl} githubUrl={githubUrl} />
    </article>
  );
}
