import Image from 'next/image';

export default function ImageComponent({ src }) {
  return (
    <div className='w-full overflow-y-auto border h-96 rounded-xl'>
      <div className='relative w-full h-screen'>
        <Image src={src} layout='fill' objectFit={'contain'}></Image>
      </div>
    </div>
  );
}
