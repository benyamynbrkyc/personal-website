import Spacer from 'components/ui/Spacer';

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
