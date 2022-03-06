import Spacer from 'components/ui/Spacer';

export default function Title({ children }: { children: JSX.Element }) {
  return (
    <>
      <h1 className='text-3xl border-b border-gray-200 dark:border-gray-800 title'>
        {children}
      </h1>
      <Spacer size='sm' />
    </>
  );
}
