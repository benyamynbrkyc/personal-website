import Head from 'components/meta/Head';
import WorkCard from 'views/Work/WorkCard';

const projects = [
  {
    title: 'ERP Suite Modernization',
    description:
      'Porting a mature ERP suite, refined over more than 20 years, from a legacy stack to a modern local-first architecture.',
    highlights: [
      'Incremental migration of established business workflows into React and TanStack Start',
      'Offline-capable, conflict-free synchronization with ElectricSQL and CRDTs',
      'Node.js backend with Drizzle over PostgreSQL for a staged data migration',
    ],
    tags: [
      { name: 'React', color: '#149ECA' },
      { name: 'TanStack Start', color: '#EF4444' },
      { name: 'ElectricSQL', color: '#8B5CF6' },
      { name: 'CRDT', color: '#F59E0B' },
      { name: 'Node.js', color: '#3C873A' },
      { name: 'Drizzle', color: '#C5F74F' },
      { name: 'PostgreSQL', color: '#336791' },
    ],
  },
  {
    title: 'Orgman',
    description:
      'A growing SaaS platform combining task workflows, department hierarchies, and role-based collaboration in a secure, real-time system.',
    highlights: [
      'Organization-aware tasks with comments, attachments, favorites, subscriptions, statuses, types, and lists',
      'Agent-friendly CLI access with JSON and Markdown output through Clerk authentication',
      'Cloudflare deployment, rich text editing, SendGrid, PostHog, and automated test and code generation flows',
    ],
    tags: [
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'React', color: '#149ECA' },
      { name: 'TanStack Start', color: '#EF4444' },
      { name: 'Convex', color: '#F35A3F' },
      { name: 'PostHog', color: '#F9BD2B' },
      { name: 'Clerk', color: '#6C47FF' },
      { name: 'Astro', color: '#FF5D01' },
    ],
  },
  {
    title: 'Hotel President & Spa',
    description:
      'A complete hotel digitalization platform spanning room access, mobile applications, SPA access systems, TV portals, food ordering, and streaming integrations.',
    highlights: [
      'Guest and admin surfaces for rooms, reservations, check-in, access codes, restaurant menus, offers, and newsletters',
      'Jantar access control, cash register services, and device/controller setup',
      'Monri payment URLs, webhooks, status handling, and reservation payment state',
    ],
    tags: [
      { name: '.NET', color: '#512BD4' },
      { name: 'ASP.NET Core', color: '#512BD4' },
      { name: 'React', color: '#149ECA' },
      { name: 'React Native', color: '#149ECA' },
    ],
  },
  {
    title: 'Hotel Story Automation',
    description:
      'A custom hotel software solution with digital TV portals, access control systems, mobile applications, and hotel service management.',
    highlights: [
      'Room operations, guest workflows, access codes, and TV/admin endpoints',
      'Device/controller setup, cash register services, and Monri payment flows',
      'Mobile and digital TV portal surfaces for in-room services and hotel management',
    ],
    tags: [
      { name: '.NET', color: '#512BD4' },
      { name: 'ASP.NET Core', color: '#512BD4' },
      { name: 'React', color: '#149ECA' },
      { name: 'React Native', color: '#149ECA' },
    ],
  },
  {
    title: 'Cjenogram',
    description:
      'A cross-platform grocery price comparison platform developed with the Chamber of Economy of Zenica-Doboj Canton.',
    highlights: [
      'Product scanning, cross-store price comparison, and shopping-list management',
      'Mobile-first pnpm/Turbo monorepo with Convex backend and shared web/CMS surfaces',
      'Real-time data, backend type checks, Convex tests, and explicit deployment workflows',
    ],
    tags: [
      { name: 'React', color: '#149ECA' },
      { name: 'Astro', color: '#FF5D01' },
      { name: 'React Native', color: '#149ECA' },
      { name: 'Convex', color: '#F35A3F' },
    ],
  },
  {
    title: 'Winpoint',
    description:
      'An esports prediction platform targeting CS:GO, where players predict match outcomes and earn rewards.',
    highlights: [
      'Match prediction flows for CS:GO esports',
      'Player rewards tied to prediction outcomes',
    ],
    imgUrl: '/images/work/winpoint.webp',
    tags: [
      { name: 'Next.js', color: '#0983E5' },
      { name: 'React', color: '#149ECA' },
    ],
  },
  {
    title: 'ProFarm',
    description:
      'A custom ecommerce experience tightly integrated with a rich content management system for ProFarm Pharmacy.',
    highlights: [
      'Headless WordPress commerce and content workflow',
      'Server-rendered storefront with authentication and validated forms',
      'GraphQL integration and search-friendly metadata',
    ],
    imgUrl: '/images/work/profarm.webp',
    liveUrl: 'https://www.profarm.ba',
    tags: [
      { name: 'Next.js', color: '#0983E5' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'WordPress', color: '#21759B' },
      { name: 'GraphQL', color: '#E10098' },
      { name: 'Zustand', color: '#A16207' },
      { name: 'Tailwind CSS', color: '#38BDF8' },
    ],
  },
  {
    title: 'Dictum Factum',
    description:
      'A multilingual website and self-hosted content platform for Youth Association “Dictum Factum” Maglaj.',
    highlights: [
      'Flexible editor built from reusable content blocks',
      'Internationalized content and frontend experience',
      'Self-hosted CMS with user and content management',
    ],
    imgUrl: '/images/work/ya-dictum-factum-maglaj.webp',
    liveUrl: 'https://dictumfactum.org',
    tags: [
      { name: 'Next.js', color: '#0983E5' },
      { name: 'Payload CMS', color: '#111827' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Internationalization', color: '#60A5FA' },
      { name: 'VPS', color: '#64748B' },
    ],
  },
  {
    title: 'Smart Locker System',
    description:
      'A smart locker management system handling secure access, reservations, and real-time locker status monitoring.',
    highlights: [
      'Secure locker access workflows',
      'Locker reservations and availability management',
      'Real-time locker status monitoring',
    ],
    tags: [
      { name: 'Python', color: '#3776AB' },
      { name: 'React', color: '#149ECA' },
      { name: 'Node.js', color: '#3C873A' },
    ],
  },
  {
    title: 'AI Log Detection System',
    description:
      'An AI-powered system for automated log analysis and anomaly detection across large volumes of system logs.',
    highlights: [
      'Automated log analysis and anomaly detection',
      'Real-time surfacing of operational issues',
      'Processing designed for high-volume system logs',
    ],
    tags: [
      { name: 'Python', color: '#3776AB' },
      { name: 'React', color: '#149ECA' },
      { name: 'Node.js', color: '#3C873A' },
    ],
  },
  {
    title: 'Chemical Warehouse Management System',
    description:
      'A chemical warehouse and inventory system for monitoring barrel storage, stock, expiry dates, and operational reporting.',
    highlights: [
      'Chemical inventory and barrel-level storage tracking',
      'Automated alerts for expired and soon-to-expire chemicals',
      'Warehouse reports and analytics',
    ],
    tags: [
      { name: 'Python', color: '#3776AB' },
      { name: 'React', color: '#149ECA' },
      { name: 'Node.js', color: '#3C873A' },
    ],
  },
];

export default function Work() {
  return (
    <>
      <Head />
      <div className='text-black dark:text-white'>
        <header className='mb-12'>
          <p className='mb-2 text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400'>
            Selected work
          </p>
          <h1 className='text-4xl font-bold tracking-tight'>Products and systems</h1>
          <p className='mt-4 max-w-xl text-lg leading-8 text-gray-700 dark:text-gray-300'>
            Full-stack products across real-time web platforms, local-first
            business software, cross-platform mobile, hospitality, ecommerce,
            and event-driven backend systems.
          </p>
        </header>

        <section className='flex flex-col items-center gap-12 pb-20'>
          {projects.map((project, index) => (
            <WorkCard
              key={project.title}
              {...project}
              priority={index === 0}
            />
          ))}
        </section>
      </div>
    </>
  );
}
