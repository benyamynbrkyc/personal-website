export type Tag = {
  name: string;
  color?: string;
};

export default function WorkTags({ tags }: { tags: Tag[] }) {
  return (
    <div className='mt-1 flex items-center gap-2 overflow-auto pb-1 scrollbar-hide'>
      {tags.map((tag) => (
        <i
          style={{ backgroundColor: tag.color ? `${tag.color}32` : '#f3f4f632' }}
          key={tag.name}
          className='whitespace-nowrap rounded-full px-2 py-1 text-center text-sm font-light italic'>
          {tag.name}
        </i>
      ))}
    </div>
  );
}
