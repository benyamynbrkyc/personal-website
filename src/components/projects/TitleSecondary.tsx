import Spacer from 'components/UI/Spacer';

export default function TitleSecondary({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <>
      <h1 className='text-xl title'>{children}</h1>
      <Spacer size='sm' />
    </>
  );
}
