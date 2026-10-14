import { getImage } from 'astro:assets';
import profile from '../assets/images/profile.webp';
import { site } from './site';
import type { Project } from './projects';

// schema.org JSON-LD shared by every page: the site and the person it is about.
export async function baseGraph(origin: URL) {
  const home = new URL('/', origin).href;
  const profileImage = await getImage({
    src: profile,
    width: 512,
    format: 'jpg',
  });

  return {
    person: {
      '@type': 'Person',
      '@id': `${home}#person`,
      name: site.name,
      givenName: 'Benjamin',
      familyName: 'Brkić',
      jobTitle: site.jobTitle,
      description: site.description,
      url: home,
      image: new URL(profileImage.src, origin).href,
      sameAs: [site.social.linkedin, site.social.github],
      knowsAbout: site.knowsAbout,
    },
    website: {
      '@type': 'WebSite',
      '@id': `${home}#website`,
      url: home,
      name: site.name,
      description: site.description,
      inLanguage: 'en',
      publisher: { '@id': `${home}#person` },
    },
  };
}

export function projectList(projects: Project[], origin: URL) {
  const home = new URL('/', origin).href;

  return {
    '@type': 'ItemList',
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: project.title,
        description: project.description,
        keywords: project.tags.map((tag) => tag.name).join(', '),
        creator: { '@id': `${home}#person` },
        ...(project.liveUrl ? { url: project.liveUrl } : {}),
      },
    })),
  };
}
