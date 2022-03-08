import Image from 'next/image';

interface IProps {
  title: string;
  description: string;
  imgUrl: string;
  tags: string[];
}

export default function WorkCard({ title, description, imgUrl, tags }: IProps) {
  return (
    <article className='flex w-full max-w-lg flex-col gap-2 rounded-2xl p-6 text-black dark:bg-gray-900 dark:text-white'>
      <div className='aspect-w-16 aspect-h-9 relative mb-2 max-w-lg rounded-2xl hover:scale-110'>
        <Image
          src={imgUrl}
          layout='fill'
          objectFit='cover'
          className='rounded'
        />
      </div>
      <h1 className='text-2xl font-bold'>{title}</h1>
      <p>{description}</p>
    </article>
  );
}
