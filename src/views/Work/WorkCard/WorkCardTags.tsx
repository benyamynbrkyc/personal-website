export type Tag = {
  name: string;
  color?: string;
};

export default function WorkTags({ tags }: { tags: Tag[] }) {
  return (
    <div className='overflox mt-1 flex items-center gap-2 overflow-auto scrollbar-hide'>
      {tags.map((tag) => (
        <i
          style={{ backgroundColor: `${tag.color}32` || '#f3f4f632' }} // tailwind gray-100
          key={tag.name}
          className='rounded-full py-1 px-2 text-center whitespace-nowrap text-sm font-light italic'>
          {tag.name}
        </i>
      ))}
    </div>
  );
}
