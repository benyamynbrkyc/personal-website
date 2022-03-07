export default function Spacer({ size = 'md' }) {
  let spacer = <div className='h-8 w-full'></div>;
  switch (size) {
    case 'md':
      spacer = <div className='h-8 w-full'></div>;
      break;
    case 'sm':
      spacer = <div className='h-4 w-full'></div>;
      break;
    case 'lg':
      spacer = <div className='h-12 w-full'></div>;
      break;
    default:
      spacer = <div className='h-8 w-full'></div>;
      break;
  }
  return spacer;
}
