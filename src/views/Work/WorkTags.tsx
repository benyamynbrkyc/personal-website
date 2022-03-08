export type Tag = {
  name: string;
  color?: string;
};

export default function WorkTags({ tags }: { tags: Tag[] }) {
  return (
    <div className='mt-1 flex items-center gap-2'>
      {tags.map((tag) => (
        <i
          key={tag.name}
          className={`rounded-full py-1 px-2 text-center font-extralight italic ${
            tag.color ? `bg-${tag.color}` : 'bg-gray-100'
          }`}>
          {tag.name}
        </i>
      ))}
    </div>
  );
}
