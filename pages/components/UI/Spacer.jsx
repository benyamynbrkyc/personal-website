export default function Spacer({ size = 'md' }) {
  let spacer = <div className='w-full h-8'></div>;
  switch (size) {
    case 'md':
      spacer = <div className='w-full h-8'></div>;
      break;

    case 'sm':
      spacer = <div className='w-full h-4'></div>;
      break;
    case 'lg':
      spacer = <div className='w-full h-12'></div>;
      break;

    default:
      spacer = <div className='w-full h-8'></div>;
      break;
  }
  return spacer;
}
