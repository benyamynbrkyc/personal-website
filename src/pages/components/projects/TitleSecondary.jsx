import Spacer from '../UI/Spacer';

export default function TitleSecondary({ children }) {
  return (
    <>
      <h1 className='text-xl title'>{children}</h1>
      <Spacer size='sm' />
    </>
  );
}
