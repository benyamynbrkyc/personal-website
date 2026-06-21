const experience = [
  {
    role: 'Software Developer',
    company: 'Sportradar',
    period: 'Jan 2026 — Present',
    summary:
      'Continuing with the same engineering team following NSoft’s rebrand, building payment-provider integrations and real-time services with Kafka, RabbitMQ, and WebSockets, supported by AI-assisted engineering workflows.',
  },
  {
    role: 'Software Developer',
    company: 'NSoft',
    period: 'Apr 2022 — Jan 2026',
    summary:
      'Developed and maintained backend systems with Java and Spring Boot, relational databases, Kafka and RabbitMQ, supported by CI/CD and containerized delivery.',
  },
  {
    role: 'Freelance Full Stack Software Developer',
    company: 'Self-employed',
    period: 'Jun 2020 — Present',
    summary:
      'I gather and prioritize client requests, steer product direction, and take products from implementation through deployment, SEO, operations, and maintenance.',
  },
];

const skillGroups = [
  {
    label: 'Frontend',
    skills:
      'JavaScript, TypeScript, React, Next.js, TanStack Start, Astro, Tailwind CSS',
  },
  {
    label: 'Backend',
    skills:
      'Java, Spring Boot, Node.js, Convex, Kafka, RabbitMQ, WebSockets, real-time and event-driven services',
  },
  {
    label: 'Data',
    skills:
      'PostgreSQL, Drizzle, ElectricSQL, CRDTs, SQL, MariaDB, Percona MySQL',
  },
  {
    label: 'Mobile & integrations',
    skills:
      'Expo, React Native, cross-platform apps, payment integrations, device integrations',
  },
  {
    label: 'Delivery',
    skills:
      'Docker, NGINX, Kubernetes, Jenkins, CI/CD, Git, Clerk, PostHog, AI-assisted and agentic development',
  },
];

export default function ProfileSummary() {
  return (
    <div className='mt-16 space-y-12 text-black dark:text-white'>
      <section aria-labelledby='about-heading'>
        <p className='mb-2 text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400'>
          About
        </p>
        <h2 id='about-heading' className='text-3xl font-bold tracking-tight'>
          Full-stack, from interface to infrastructure.
        </h2>
        <p className='mt-4 text-lg leading-8 text-gray-700 dark:text-gray-300'>
          I build modern TypeScript and React frontends on real-time backends,
          working across Next.js, TanStack Start, Astro, Convex, Java and Spring
          Boot. My work also spans cross-platform mobile apps, local-first
          software, payment and device integrations, and AI-assisted workflows.
        </p>
      </section>

      <section aria-labelledby='experience-heading'>
        <p className='mb-2 text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400'>
          Experience
        </p>
        <h2 id='experience-heading' className='sr-only'>
          Experience
        </h2>
        <div className='divide-y divide-gray-200 rounded-2xl border bg-white px-6 dark:divide-gray-800 dark:border-transparent dark:bg-gray-900'>
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className='py-6'>
              <div className='flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline'>
                <h3 className='text-lg font-semibold'>
                  {item.role} <span className='text-gray-500'>at</span>{' '}
                  {item.company}
                </h3>
                <p className='whitespace-nowrap text-sm text-gray-500 dark:text-gray-400'>
                  {item.period}
                </p>
              </div>
              <p className='mt-2 leading-7 text-gray-700 dark:text-gray-300'>
                {item.summary}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby='skills-heading'>
        <p className='mb-2 text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400'>
          Skills
        </p>
        <h2 id='skills-heading' className='sr-only'>
          Skills
        </h2>
        <dl className='grid gap-4 sm:grid-cols-2'>
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className='rounded-2xl border p-5 dark:border-gray-800'>
              <dt className='font-semibold'>{group.label}</dt>
              <dd className='mt-2 leading-6 text-gray-600 dark:text-gray-400'>
                {group.skills}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className='rounded-2xl bg-blue-600 px-6 py-7 text-white'>
        <p className='text-sm font-medium uppercase tracking-widest text-blue-100'>
          Community
        </p>
        <h2 className='mt-2 text-2xl font-bold'>IT Challenge organizer</h2>
        <p className='mt-2 leading-7 text-blue-50'>
          Since 2018, I have helped organize one of Bosnia and Herzegovina’s
          largest IT competitions for young developers and informatics students.
        </p>
      </section>
    </div>
  );
}
