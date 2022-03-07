// import Spacer from 'components/ui/Spacer';

export default function Title({ children }: { children: JSX.Element }) {
  return (
    <>
      <h1 className='title border-b border-gray-200 text-3xl dark:border-gray-800'>
        {children}
      </h1>
      {/* <Spacer size='sm' /> */}
    </>
  );
}
