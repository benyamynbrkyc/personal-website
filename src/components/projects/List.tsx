export default function List({ children }: { children: JSX.Element }) {
  return <ul className='list-disc list-inside'>{children}</ul>;
}
