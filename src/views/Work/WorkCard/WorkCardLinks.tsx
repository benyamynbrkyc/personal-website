import { ExternalLinkIcon } from '@heroicons/react/outline';
import GithubIcon from './GithubIcon';

interface IProps {
  liveUrl?: string;
  githubUrl?: string;
}

export default function WorkCardLinks({ liveUrl, githubUrl }: IProps) {
  if (liveUrl || githubUrl)
    return (
      <section className='my-1 flex items-center gap-4'>
        {liveUrl && (
          <a
            href={liveUrl}
            target='_blank'
            className='my-2 flex items-center gap-1 text-sm hover:underline'>
            <span>Website</span>
            <ExternalLinkIcon className='h-4 w-4' />
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target='_blank'
            className='my-2 flex items-center gap-1 text-sm hover:underline'>
            <span>GitHub</span>
            <GithubIcon />
          </a>
        )}
      </section>
    );

  return null;
}
