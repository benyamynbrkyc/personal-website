import type { ImageMetadata } from 'astro';

import winpoint from '../assets/images/work/winpoint.webp';
import profarm from '../assets/images/work/profarm.webp';
import dictumFactum from '../assets/images/work/ya-dictum-factum-maglaj.webp';
import hotelPresident from '../assets/images/work/hotel-president.png';
import hotelStory from '../assets/images/work/hotel-story.png';
import cjenogram from '../assets/images/work/cjenogram.png';
import orgman from '../assets/images/work/orgman.webp';
import natronHayat from '../assets/images/work/natron-hayat.png';
import primavera from '../assets/images/work/primavera.png';

const magnetdev = (slug: string) => `https://magnetdev.io/work/${slug}`;

export type Tag = {
  name: string;
  color?: string;
};

export type Project = {
  title: string;
  description: string;
  highlights: string[];
  image?: ImageMetadata;
  tags: Tag[];
  liveUrl?: string;
  githubUrl?: string;
  /** Set for client work delivered through MagnetDev. */
  caseStudyUrl?: string;
};

export const projects: Project[] = [
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
      'MagnetDev’s organization management SaaS: tasks, department hierarchies, messaging, leave, visitors and reporting in one real-time, role-based system. It began as a task manager for a municipal administration.',
    highlights: [
      'Tasks in list, kanban, calendar and table views with custom statuses, dependencies, templates and three visibility levels',
      'Department hierarchy, six organization roles, leave approvals, visitor register and CSV/Excel reports',
      'Installable app with push notifications, plus an agent-friendly CLI; Bosnian and English throughout',
    ],
    image: orgman,
    liveUrl: 'https://orgman.magnetdev.io',
    caseStudyUrl: magnetdev('orgman'),
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
      'A connected platform for a 4-star hotel in Maglaj, built at MagnetDev: guest website, staff CMS, in-room Android TV app and housekeeping app on one on-premise API that talks to the door locks and the cash register.',
    highlights: [
      'Two-way Jantar integration: guest PINs and cards, automatic self check-in/out, remote unlock, heating before arrival, live cleaning/DND/SOS events',
      'Cash-register sync for prices, menus and extras; reservations and in-room orders posted straight to the guest bill',
      'Booking engine with child pricing, add-ons, coupons and Monri payments; staff timeline, live floor plan and roles',
    ],
    image: hotelPresident,
    liveUrl: 'https://hotelpresidentmaglaj.com',
    caseStudyUrl: magnetdev('hotel-president'),
    tags: [
      { name: '.NET', color: '#512BD4' },
      { name: 'ASP.NET Core', color: '#512BD4' },
      { name: 'React', color: '#149ECA' },
      { name: 'React Native', color: '#149ECA' },
    ],
  },
  {
    title: 'Hotel Story',
    description:
      'Website and management backend for a new hotel and wedding venue in Žepče, built at MagnetDev on the same hotel platform as Hotel President.',
    highlights: [
      'One-page site for rooms, restaurant, café, weddings and celebrations with galleries, video and direct Viber/WhatsApp contact',
      'CMS-driven blog for news, offers and wedding stories',
      'Hotel platform configured for Story: rooms, prices and reservations with cash-register sync',
    ],
    image: hotelStory,
    liveUrl: 'https://hotel-story.ba',
    caseStudyUrl: magnetdev('hotel-story'),
    tags: [
      { name: 'Next.js', color: '#0983E5' },
      { name: 'React', color: '#149ECA' },
      { name: '.NET', color: '#512BD4' },
      { name: 'MySQL', color: '#00758F' },
    ],
  },
  {
    title: 'Cjenogram',
    description:
      'A public grocery and fuel price-comparison app built at MagnetDev for the Chamber of Economy of Zenica-Doboj Canton — live in the App Store, with Android in Google Play testing.',
    highlights: [
      'Barcode scanning with GS1 lookup, price comparison across 16 retail and fuel chains, shopping lists and photo-backed price submissions',
      'Moderation CMS for the chamber, with store administrators scoped to their own stores',
      'Expo mobile apps, Convex backend with 564 tests, TanStack Start CMS and Astro site on Cloudflare Workers',
    ],
    image: cjenogram,
    liveUrl: 'https://cjenogram.ba',
    caseStudyUrl: magnetdev('cjenogram'),
    tags: [
      { name: 'React Native', color: '#149ECA' },
      { name: 'Expo', color: '#4630EB' },
      { name: 'Convex', color: '#F35A3F' },
      { name: 'TanStack Start', color: '#EF4444' },
      { name: 'Astro', color: '#FF5D01' },
    ],
  },
  {
    title: 'Natron-Hayat',
    description:
      'Bilingual corporate website for Natron-Hayat, an integrated pulp and paper mill in Maglaj — product catalog, certificates, ecology reporting and careers.',
    highlights: [
      'Product catalog fed from the client’s CMS: 6 categories, 21 products with technical data sheets',
      'Certificate and document library, six-tab ecology section, company timeline and announcements',
      'Careers with CV upload and contact forms routed to six departments; maintained since 2023',
    ],
    image: natronHayat,
    liveUrl: 'https://natron-hayat.ba',
    caseStudyUrl: magnetdev('natron-hayat'),
    tags: [
      { name: 'Next.js', color: '#0983E5' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'next-intl', color: '#60A5FA' },
      { name: 'MDX', color: '#F9AC00' },
      { name: 'Tailwind CSS', color: '#38BDF8' },
    ],
  },
  {
    title: 'Primavera Estate Apartments',
    description:
      'Commission-free direct-booking website and rental management panel for holiday apartments in Pula and Medulin, Croatia.',
    highlights: [
      'Search by dates and guests with live availability, stay totals and alternative date suggestions',
      'Admin panel for apartments, seasonal pricing and reservations, including manual phone bookings',
      'English, Croatian and German content with structured data, Turnstile and consent-mode ads tracking',
    ],
    image: primavera,
    liveUrl: 'https://primaveraestate-apartments.com',
    caseStudyUrl: magnetdev('primavera-apartments'),
    tags: [
      { name: 'Next.js', color: '#0983E5' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'next-intl', color: '#60A5FA' },
      { name: 'NextAuth', color: '#7C3AED' },
      { name: 'TanStack Query', color: '#EF4444' },
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
    image: winpoint,
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
    image: profarm,
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
    image: dictumFactum,
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
