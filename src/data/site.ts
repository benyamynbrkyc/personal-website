export const site = {
  name: 'Benjamin Brkić',
  jobTitle: 'Full Stack Developer',
  title: 'Benjamin Brkić | Full Stack Developer',
  description:
    'Benjamin Brkić is a full-stack developer building modern web and mobile products with TypeScript, React, Convex, Java, and Spring Boot.',
  email: 'benjamin@benjaminbrkic.com',
  cvPath: '/work/benjamin-brkic-full-stack-developer-cv.pdf',
  twitter: '@bnjmnbrkc',
  social: {
    linkedin: 'https://www.linkedin.com/in/benjaminbrkic',
    github: 'https://github.com/benyamynbrkyc',
  },
  knowsAbout: [
    'TypeScript',
    'React',
    'React Native',
    'Node.js',
    'Convex',
    'Astro',
    'Next.js',
    'TanStack Start',
    'PostgreSQL',
    'Java',
    'Spring Boot',
    '.NET',
  ],
};

// Pages build to files like `work.html`, which Cloudflare serves at `/work`.
// `Astro.url.pathname` still includes the file name, so strip it.
export function pagePath(url: URL) {
  return url.pathname.replace(/(?:\/index)?\.html$/, '') || '/';
}
